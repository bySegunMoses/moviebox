import React, { useEffect, useState } from "react";
import MovieCard from "../reusable/moviecard";
import { Link, useNavigate } from 'react-router-dom';
import {FaChevronRight} from 'react-icons/fa'

const FeaturedMovies = () => {
  const [topMovies, setTopMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false); // Add error state
  const navigate = useNavigate();

  const goToMovieDetail = (movie) => {
    // Use the navigate function to navigate and pass the movie data as a parameter
    navigate(`/movies/${movie.id}`, { state: { movie } });
  };

  useEffect(() => {
    const apiUrl = 'https://api.themoviedb.org/3/movie/top_rated';
    const apiKey = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMGU0MTQ5YTdiODUzMDAwYjAwZGYwYzM5ZmEyMzA4YSIsInN1YiI6IjY0ZmZiYjFiZGI0ZWQ2MTAzNDNmNjExNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WYRcJJLchZznbLgiDB2P59x3HdMokz7UIL96fEcmsuE';

    const fetchData = fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Accept': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.results && Array.isArray(data.results)) {
          const moviesWithFullImages = data.results.map((movie) => ({
            ...movie,
            backgroundImage: `https://example.com/images/${movie.backgroundImage}`,
          }));
          setTopMovies(moviesWithFullImages);
        } else {
          console.error("Invalid data format received from the API:", data);
          setHasError(true); // Set error state if data format is invalid
        }
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setHasError(true); // Set error state on fetch error
      });

    const timeoutPromise = new Promise((_, reject) => {
      setTimeout(() => {
        reject(new Error("API request timed out")); // Reject promise after 3 minutes
      }, 180000); // 3 minutes in milliseconds
    });

    Promise.race([fetchData, timeoutPromise])
      .finally(() => {
        setIsLoading(false); // Update loading state when promise resolves (or times out)
      });
  }, []);

  return (
    <section className="" style={{ padding: '20px 50px 80px 50px' }}>
      <div className="">
        <div className="flex justify-between pb-3 gap-3" style={{marginBottom: '20px'}}>
          <div className="flex justify-between gap-2">
            <h3 style={{ fontWeight: 500, fontSize: '35px' }}>Featured Movies</h3>
          </div>
          <button style={{display: 'flex', color: "#BE123C", alignItems: 'center' }}>
            <p style={{ color: "#BE123C" }}>See More</p>
            <FaChevronRight />
          </button>
        </div>
        {hasError ? (
          <div>Error: Failed to load data. Please try again later.</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4" style={{margin: 0}}>
            {isLoading ? (
              <div>Loading...</div>
            ) : (
              topMovies.slice(0, 10).map((movie, index) => (
                <button onClick={goToMovieDetail.bind(null, movie)}><MovieCard
                  key={index}
                  id={movie.id}
                  release_date={movie.release_date}
                  title={movie.title}
                  rating={movie.vote_average}
                  genres={movie.genre_ids}
                  year={movie.release_date}
                  isTVSeries={movie.isTVSeries}
                  backgroundImage={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`}
                  likes={movie.popularity}
                /></button>
              ))
            )}
          </div>
        )}
      </div>
    </section>
  );
}

export default FeaturedMovies;
