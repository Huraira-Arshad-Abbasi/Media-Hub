import '../styles/imageGallery.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
// import MediaItem from './MediaItem';
import Loader from './Loader'
// import PropTypes from 'prop-types'
import { useSearch } from '../context/SearchContext'

export default function ImageGallery () {
  const [images, setImages] = useState([])
  const [images2, setImages2] = useState([])
  const [images3, setImages3] = useState([])
  const [loading, setLoading] = useState(true)
  const { search } = useSearch()
  let term = search?.term || 'nature'
  
  useEffect(() => {
     
    
    const fetchImages = async () => {
      try {
        const pexelsRes = await axios.get('https://api.pexels.com/v1/search', {
          headers: {
            Authorization:
              'GFXOzSk0pLLKaLPm1JCV2ZJgFuoy6fVFKj0daeeaKjbQu3YP4dSUj5SA'
          },
          params: {
            query: term, 
            per_page: 22
          }
        })

        const pexelsImages = pexelsRes.data.photos.map(img => ({
          id: `${img.id}`,
          src: img.src.medium,
          original: img.src.original,
          alt: img.alt || 'Pexels image'
        }))

        let onethird = Math.ceil(pexelsImages.length / 3)
        let col1 = pexelsImages.slice(0, onethird)
        let col2 = pexelsImages.slice(onethird, onethird * 2)
        let col3 = pexelsImages.slice(onethird * 2, pexelsImages.length)

        setImages(col1)
        setImages2(col2)
        setImages3(col3)
      } catch (error) {
        console.error('Error fetching images:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchImages()

    // eslint-disable-next-line react/prop-types
  }, [term])

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
                <img src={image.original} alt={image.alt} />
                <div className='desc'>{image.alt}</div>
                <button onClick={() => handleDownload(image.original)}>
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
                <img src={image.original} alt={image.alt} />
                <div className='desc'>{image.alt}</div>
                <button onClick={() => handleDownload(image.original)}>
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
                <img src={image.original} alt={image.alt} />
                <div className='desc'>{image.alt}</div>
                <button onClick={() => handleDownload(image.original)}>
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

// ImageGallery.propTypes = {
//   term: PropTypes.string
// }
