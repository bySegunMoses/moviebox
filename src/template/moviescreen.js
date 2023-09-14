import React, { useState, useEffect } from "react";
import styles from "../css/style";
import { Outlet, Link, useNavigate, useLocation } from "react-router-dom";
import logo from '../assets/others/Logo.svg';
import home from '../assets/Home.svg';
import movieIcon from '../assets/Movie Projector.svg';
import tvIcon from '../assets/TV Show.svg';
import upcoming from '../assets/Calendar.svg';
import logoutBTN from '../assets/Logout.svg';
import "tailwindcss/tailwind.css"; // Import Tailwind CSS styles;
import MovieDetail from "../routes/movieDetail";


const Template = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Home", src: home, link: "/" },
    { title: "Movies", src: movieIcon, link: "#" },
    { title: "TV Series", src: tvIcon, link: "/"},
    { title: "Upcoming ", src: upcoming, link: "/" },
  ];

  const location = useLocation();

  useEffect(() => {
    setOpen(true); // Open the sidebar by default
  }, [location]);

  return (
    <div style={styles.mainView}>
      <div
        className={`${
          open ? "w-60" : "w-20"
        } bg-dark-purple h-screen p-5  pt-8 relative duration-300`}
        style={styles.sidebar}
      >
        <div className="flex gap-x-4 items-center" style={{
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            width: '100%',
        }}>
          <img
            src={logo}
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
            style={{marginTop: '20px'}}
          />
        </div>
        <ul style={styles.sidebarMenu} className="pt-6">
          {Menus.map((Menu, index) => (
            <Link to={`${Menu.link}`} key={index}>
              <li
                className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
                  ${Menu.gap ? "mt-9" : "mt-2"} ${
                    location.pathname === `/${Menu.link}` && "bg-be123c border-r-3"
                  } `}
              >
                <img src={Menu.src} />
                <span className={`${!open && "hidden"} origin-left duration-200`} style={{marginLeft: '8px'}}>
                  {Menu.title}
                </span>
              </li>
            </Link>
          ))}
        </ul>
        <div style={{
            borderWidth: '1px',
            borderColor: '#BE123C',
            borderRadius: '10px',
            background: '#F8E7EB',
            marginTop: '20px',
            padding: '25px 5px 10px 5px',
            textAlign: 'center',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <p style={{fontWeight: '500', fontSize: '14px', textAlign: 'left'}}>Play movie quizes and earn free tickets</p>
            <p style={{fontWeight: '500', color: '#666666', fontSize: '11px',  textAlign: 'left' }}>50k people are playing now</p>
            <button style={{
              background: 'rgba(190, 18, 60, 0.2)',
              color: '#BE123C',
              borderRadius: '30px',
              fontSize: '10px',
              padding: 5,
              alignSelf: 'center',
              width: '70%',
              fontWeight: '500',
              textAlign: 'center'
            }}>Start playing</button>
        </div>
        <div style={{
            position:'absolute',
            bottom: 10
        }}>
        <Link className={`"bg-be123c border-r-3"
                  } `} style={{display: 'flex', alignItems: 'center'}} >
            <img src={logoutBTN} />
            <span>Log Out</span>
        </Link></div>
      </div>
      <div id="detail" style={styles.dashboardRoute} className="h-screen flex-1 p-7 flex relative">
        <div className="w-full md:w-3/4">
          {/* MovieDetail container */}
          <MovieDetail />
        </div>
      </div>
    </div>
  );
};

export default Template;
