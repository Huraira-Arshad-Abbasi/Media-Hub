import '../styles/imageGallery.css'
import { useState, useEffect } from 'react';
import axios from 'axios';
// import MediaItem from './MediaItem';
import Loader from './Loader';
export default function ImageGallery() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get('https://api.unsplash.com/photos', {
          headers: {
            'Authorization': 'Client-ID 3ZTaU9LHcJMp-bptWXR_81txbNq6ndPIqjmmFuWDl9k',
          }
        })
        setImages(response.data)

      } catch (error) {
        console.error('Error fetching images:', error);

      } finally {
        setLoading(false)
      }
    }
    fetchImages()
  }, [])


  if (loading) {
    return <Loader />
  }
  return (
    <div className='galleryContainer'>
      {
        images.map((image) => {
          // <MediaItem
          //   key={image.id}
          //   url={image.urls.small}
          //   alt={image.alt_description}
          //   type="image"
          // />
          console.log(image);
          
          return (
            <>
              <div className="img__col">
                <div className="img__box">
                  <img key={image.id} src={image.urls.small} alt={image.alt_description} />
                  
                </div>
              </div>
              <div className="img__col">
                <div className="img__box">
                  <img key={image.id} src={image.urls.small} alt={image.alt_description} />
                </div>
              </div>
              <div className="img__col">
                <div className="img__box">
                  <img key={image.id} src={image.urls.small} alt={image.alt_description} />
                </div>
              </div>


            </>
          )


        })
      }

    </div>
  )
}
