import Search from "./Search";
import '../styles/navbar.css'

import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    const searchBar = useRef(null);
    const nav__bg = useRef(null);
    useEffect(() => {
        window.onscroll = function() {
            if (window.scrollY > 230) { // If scrolling has started
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
            <div className="logo">
                <Link to="/">Media<span>Hub</span></Link>
            </div>
            <div className="searchBar" ref={searchBar}>
            <Search />
            </div>
            <div className="aboutLink">
                <Link to="/About">About</Link>
            </div>
        </nav>
    )
}
