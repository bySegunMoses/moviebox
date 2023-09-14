import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { FaPlay, FaPause, FaDotCircle, FaStar, FaChevronDown } from 'react-icons/fa';
import '../css/movieDetail.css';
import ticket from '../assets/Two Tickets.svg'
import listIcon from '../assets/List.svg'
import listIconWhite from '../assets/List-white.png';
import suggested from '../assets/Group52.png'


const designData = {
    "adult": false,
    "backdrop_path": "/tmU7GeKVybMWFButWEGl2M4GeiP.jpg",
    "genre_ids": [
      18,
      80
    ],
    "id": 238,
    "original_language": "en",
    "original_title": "The Godfather",
    "overview": "Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.",
    "popularity": 111.417,
    "poster_path": "/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
    "release_date": "1972-03-14",
    "release_year": "2022",
    "PG": "13",
    "title": "Top Gun: Maverick",
    "video": false,
    "vote_average": 8.7,
    "vote_count": 18617,
    "duration": "2h 10m",
    "genre": "Action"
  }
  function MovieDetail() {
    const location = useLocation();
    const [isPlaying, setIsPlaying] = useState(false);
    const [youtubeUrl, setYoutubeUrl] = useState('');
    const [isLoading, setIsLoading] = useState(true);
  
    // Access the movie data from the location state
    const movie = location.state && location.state.movie;
  
    const toggleVideo = () => {
      setIsPlaying(!isPlaying);
    };
  
    useEffect(() => {
      // Fetch the YouTube video URL based on the movie ID
      const fetchYoutubeUrl = async () => {
        try {
          // Replace {movie_id} with the actual movie ID
          const movieId = movie.id; // Assuming movie.id contains the movie ID
          const apiKey = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMGU0MTQ5YTdiODUzMDAwYjAwZGYwYzM5ZmEyMzA4YSIsInN1YiI6IjY0ZmZiYjFiZGI0ZWQ2MTAzNDNmNjExNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WYRcJJLchZznbLgiDB2P59x3HdMokz7UIL96fEcmsuE'; // Replace with your API key
          const apiUrl = `https://api.themoviedb.org/3/movie/${movieId}/videos`;
          
          const fetchData = async (apiUrl, apiKey) => {
            try {
              const response = await fetch(apiUrl, {
                method: 'GET',
                headers: {
                  'Authorization': `Bearer ${apiKey}`,
                  'Accept': 'application/json',
                },
              });
              const data = await response.json();
              return data;
            } catch (error) {
              console.error('Error fetching data:', error);
              throw error;
            }
          };
          const data = await fetchData(apiUrl, apiKey);
          
          // Extract the year from the published_at field
          const publishedYear = new Date(data.published_at).getFullYear();
          
          // Update the designData object with the extracted year
          const updatedDesignData = {
            ...designData,
            release_year: publishedYear.toString(), // Convert to string if needed
          };
  
          if (data.results && data.results.length > 0) {
            const youtubeKey = data.results[0].key;
            console.log(data)
            const videoUrl = `https://www.youtube.com/embed/${youtubeKey}`;
            setYoutubeUrl(videoUrl);
          } else {
            console.error('No video data available for this movie.');
          }
        } catch (error) {
          console.error('Error fetching YouTube video URL:', error);
        } finally {
          setIsLoading(false);
        }
      };
  
      if (movie) {
        fetchYoutubeUrl();
      }
    }, [movie]);
  
    return (
      <div className="movie-detail">
        <div className="video-container">
          {isLoading ? (
            <div>Loading video...</div>
          ) : (
            <iframe
              title="Movie Trailer"
              width="640"
              height="360"
              src={youtubeUrl}
              frameBorder="0"
              allowFullScreen
              style={{ width: '100%', borderRadius: '20px' }}
            ></iframe>
          )}
  
          {isPlaying ? (
            <div onClick={toggleVideo}>
              {/**<FaPause />**/}
            </div>
          ) : (
            <div onClick={toggleVideo}>
              {/** <<FaPlay />
              <p>Watch trailer</p> **/}
            </div>
          )}
        </div>
      <div style={{display: 'flex', justifyContent: 'space-between', padding: 0, width: '95%'}}>
                <div style={{display: 'flex', width: '95%', padding: 0, color: '#404040', fontWeight: '500'}}>
                    <p>{movie.title}</p>
                    <FaDotCircle style={{fontSize: '8px', marginTop: 8, marginLeft: 10, marginRight: 10}}/>
                    <p>{designData.release_year}</p>
                    <FaDotCircle style={{fontSize: '8px', marginTop: 8, marginLeft: 10, marginRight: 10}}/>
                    <p>PG - {designData.PG}</p>
                    <FaDotCircle style={{fontSize: '8px', marginTop: 8, marginLeft: 10, marginRight: 10}}/>
                    <p>{designData.duration}</p>
                    <FaDotCircle style={{fontSize: '8px', marginTop: 8, marginLeft: 10, marginRight: 10}}/>
                    <button style={{borderColor: '#F8E7EB', borderWidth: '1px', color: "#B91C1C", padding: '3px', borderRadius: '15px', fontSize: '14px', height: "30px", width: "84px", fontWeight: '500'}}>{designData.genre}</button>
                </div>
                <div style={{display: 'flex'}}>
                    <FaStar style={{color: '#FFCD29', fontSize: '20px'}}/><p>{designData.vote_average}|350k</p>
                </div>
            </div>
      <div className="section-two">
            <div className='section-two-left'>
                
                <div style={{marginTop: 15}}>
                    <p>{movie.overview}</p>
                </div>
                <div style={{marginTop: '30px'}}>
                    <div style={{display: 'flex', marginTop: '30px'}}><p style={{color:'#333333'}}>Directors</p><p style={{marginLeft: '8px', marginRight: '8px'}}>:</p><p style={{color: '#BE123C'}}>Joshua Konsinski</p></div>
                    <div style={{display: 'flex', marginTop: '30px'}}><p style={{color:'#333333'}}>Writers</p><p style={{marginLeft: '8px', marginRight: '8px'}}>:</p><p style={{color: '#BE123C'}}>Jim Cash, Jack Epps Jr, Peter Craig</p></div>
                    <div style={{display: 'flex', marginTop: '30px'}}><p style={{color:'#333333'}}>Stars</p><p style={{marginLeft: '8px', marginRight: '8px'}}>:</p><p style={{color: '#BE123C'}}>Tom Cruise, Jennifer Connelly, Miles Teller</p></div>
                </div>

                <div style={{overflow: 'hidden', display: 'flex', borderColor: '#C7C7C7', borderWidth: '1px', borderRadius: '10px', marginTop: 30, width: '90%', height: '55px'}}>
                    <div style={{
                        background: '#BE123C',
                        width: '30%',
                        color: '#fff',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        textAlign: 'center',
                        borderRadius: '10px'
                    }}>Top rated movie #65</div>
                    <div style={{
                        display: 'flex',
                        justifyContent:'space-between',
                        padding: '0px 15px 0px 15px',
                        alignItems: 'center',
                        width: '70%'
                    }}><p>Award 9 norminations</p> <FaChevronDown style={{color: '#7C7C7C'}} /></div>
                </div>
            </div>
            <div className='section-two-right' style={{justifyContent: 'space-around'}}>
                
                <div style={{justifyContent: 'space-around'}} >
                    <button style={{
                        display: 'flex',
                        background: '#BE123C',
                        width: '100%',
                        height: '55px',
                        borderRadius: '10px',
                        color: '#fff',
                        fontSize: '18px',
                        fontWeight: '500',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textAlign: 'center'
                        }}><img src={ticket} /><p style={{marginLeft: '5px'}}>See Showtimes</p></button>

                    <button style={{
                        display: 'flex',
                        background: '#be123c1a',
                        width: '100%',
                        height: '55px',
                        borderRadius: '10px',
                        color: '#333333',
                        fontSize: '18px',
                        fontWeight: '400',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textAlign: 'center',
                        marginTop: '15px',
                        borderWidth: '1px',
                        borderColor: '#BE123C'
                        }}><img src={listIcon} /><p style={{marginLeft: '5px'}}>More watch</p></button>
                </div>
                <div style={{ marginTop: '20px', borderRadius: '10px', position: 'relative', overflow: 'hidden'}}>
                    <div className='top-images'>
                      <img src={suggested} />
                    </div>
                </div>
            </div>
      </div>
    </div>
  );
}

export default MovieDetail;
