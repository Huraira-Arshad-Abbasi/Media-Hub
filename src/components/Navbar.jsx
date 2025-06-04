import Search from "./Search";
import '../styles/navbar.css'
// import React from "react"
import { useEffect, useRef } from "react";
// // Function to show the search bar when scrolling starts
// window.onscroll = function() {
//     const searchBar = document.querySelector('.searchBar');
//     const nav__bg = document.querySelector('nav')
//     if (window.scrollY > 100) { // If scrolling has started
//       searchBar.classList.add('show-search'); // Show the search bar
//       nav__bg.classList.add('nav__bg')
//     } else {
//       searchBar.classList.remove('show-search'); // Hide the search bar when at the top
//       nav__bg.classList.remove('nav__bg')
//     }
//   };
export default function Navbar() {
    const searchBar = useRef(null);
    const nav__bg = useRef(null);
    useEffect(() => {
        window.onscroll = function() {
            if (window.scrollY > 100) { // If scrolling has started
                searchBar.current.classList.add('show-search'); // Show the search bar
                nav__bg.current.classList.add('nav__bg')
            } else {
                searchBar.current.classList.remove('show-search'); // Hide the search bar when at the top
                nav__bg.current.classList.remove('nav__bg')
            }
        };
    }, []);

    return (
        <nav ref={nav__bg} className="navbar">
            {/* logo */}
            <div className="logo">
                <a href="">Media<span>Hub</span></a>
            </div>
            {/* search bar */}
            <div className="searchBar" ref={searchBar}>
            <Search />
            </div>
            {/* about us */}
            <div className="about">
                <a href="">About</a>
            </div>
            {/* day/naight Mode */}
            <div className="mode">
                <button className="day-mode">mode</button>
            </div>
        </nav>
    )
}
