import './App.css'
// import MediaGallery from './components/MediaGallery'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import MediaItem from './components/MediaItem'
function App() {

  return (
    <>
      <Navbar />
      <MediaItem/>
      {/* <MediaGallery/> */}
      <Footer/>
    </>
  )
}

export default App
