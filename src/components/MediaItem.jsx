import { useSearch } from '../context/SearchContext'
import Header from './Header'
import '../styles/mediaItem.css' // Import the external CSS
import ImageGallery from './ImageGallery'
import VideoGallery from './VideoGallery'
import AudioGallery from './AudioGallery'
function MediaItem () {
  const { search } = useSearch()
  const { type } = search
  
  return (
    <div>
      <Header />
      <div className="mediaGallery">
        <h1>{type}</h1>
        <div className="gallery">
          {type === 'Images' && <ImageGallery />}
          {type === 'Videos' && <VideoGallery  />}
          {type === 'Audios' && <AudioGallery/>}
        </div>
      </div>
    </div>
  )
}

export default MediaItem
