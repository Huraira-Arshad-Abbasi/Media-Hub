import '../styles/header.css'
import Search from './Search'
const Header = () => {
  return (
    <div>
      <div className="container">
        <div className="header__content">
          <h1>Stunning royalty-free images & royalty-free stock</h1>
          <h2>Over 5 million+ high quality stock images, videos and music shared by our talented community.</h2>
          <div className="seachbar">
            <Search />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Header
