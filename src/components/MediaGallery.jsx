import Header from "./Header"
import ImageGallery from "./ImageGallery"

const MediaGallery = () => {
  return (
    <div>
      <Header />
      <div className="mediaGallery">
        <h1>All Images</h1>
        <div className="gallery">
          <ImageGallery />
        </div>
      </div>
    </div>
  )
}

export default MediaGallery
