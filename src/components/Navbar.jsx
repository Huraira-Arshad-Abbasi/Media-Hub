import Search from "./Search";

// import React from "react"
export default function Navbar() {
    return (
        <nav>
            {/* logo */}
            <div className="logo">
                <a href="">Media<span>Hub</span></a>
            </div>
            {/* search bar */}
            <Search />
            {/* about us */}
            <div className="about">
                <a href="">About Me</a>
            </div>
            {/* day/naight Mode */}
            <div className="mode">
                <button className="day-mode">Day Mode</button>
            </div>
        </nav>
    )
}
