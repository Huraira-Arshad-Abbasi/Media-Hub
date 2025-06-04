import '../styles/search.css'
export default function Search() {
  return (
    <div className="Search__box">
      <input type="text" placeholder='Search here' />
      <div className="dropdown">
        <button className="dropbtn">All</button>
        <div className="dropdown-content">
          <a href="#">Images</a>
          <a href="#">Videos</a>
          <a href="#">Audios</a>
        </div>
      </div>
    </div>
  )
}
