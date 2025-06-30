import '../styles/imageGallery.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
// import MediaItem from './MediaItem';
import Loader from './Loader'

export default function ImageGallery () {
  const [images, setImages] = useState([])
  const [images2, setImages2] = useState([])
  const [images3, setImages3] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get('https://api.unsplash.com/photos', {
          headers: {
            Authorization:
              'Client-ID 3ZTaU9LHcJMp-bptWXR_81txbNq6ndPIqjmmFuWDl9k'
          },
          params: {
            count: 20
          }
        })
        let originalData = response.data
        let reversedData = [...originalData].reverse()
        let shuffledData = reversedData.slice(1, 10)

        setImages(originalData)
        setImages2(reversedData)
        setImages3(shuffledData)
      } catch (error) {
        console.error('Error fetching images:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchImages()
    // eslint-disable-next-line react/prop-types
  }, [])

  const handleDownload = async url => {
    try {
      const response = await fetch(url)
      const blob = await response.blob()

      const link = document.createElement('a')
      link.href = URL.createObjectURL(blob)
      link.download = 'image.jpg' // You can customize the filename
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    } catch (error) {
      console.error('Download failed', error)
    }
  }

  if (loading) {
    return <Loader />
  }

  return (
    <div className='galleryContainer'>
      <div className='col__1'>
        {images.map(image => {
          return (
            <div className='img' key={image.id}>
              <div className='img__box'>
                <img src={image.urls.small} alt={image.alt_description} />
                <div className='desc'>{image.alt_description}</div>
                <button onClick={() => handleDownload(image.urls.full)}>
                  Download
                </button>
              </div>
            </div>
          )
        })}
      </div>
      <div className='col__2'>
        {images2.map(image => {
          return (
            <div className='img' key={image.id}>
              <div className='img__box'>
                <img src={image.urls.small} alt={image.alt_description} />
                <div className='desc'>{image.alt_description}</div>
                <button onClick={() => handleDownload(image.urls.full)}>
                  Download
                </button>
              </div>
            </div>
          )
        })}
      </div>
      <div className='col__3'>
        {images3.map(image => {
          return (
            <div className='img' key={image.id}>
              <div className='img__box'>
                <img src={image.urls.small} alt={image.alt_description} />
                <div className='desc'>{image.alt_description}</div>
                <button onClick={() => handleDownload(image.urls.full)}>
                  Download
                </button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
