import axios from 'axios'
import '../styles/videoGallery.css'
import Loader from './Loader'
import { useEffect, useState } from 'react'
import { useSearch } from '../context/SearchContext'
// import PropTypes from 'prop-types';

export default function VideoGallery () {
  const [videos1, setVideos1] = useState([])
  const [videos2, setVideos2] = useState([])
  const [videos3, setVideos3] = useState([])
  const [loading, setLoading] = useState(true)
  const { search } = useSearch()
  const term = search?.term || 'nature'

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const res = await axios.get('https://api.pexels.com/videos/search', {
          headers: {
            Authorization:
              'GFXOzSk0pLLKaLPm1JCV2ZJgFuoy6fVFKj0daeeaKjbQu3YP4dSUj5SA'
          },
          params: {
            query: term,
            per_page: 27
          }
        })

        const onethird = Math.ceil(res.data.videos.length / 3)

        let pexelVideos = res.data.videos.map(video => ({
          id: `${video.id}`,
          src: video.video_files[0].link,
          original: video.video_files[0].link,
          alt: video.alt || 'Pexels video'
        }))

       
        setVideos1(pexelVideos.slice(0, onethird))
        setVideos2(pexelVideos.slice(onethird, onethird * 2))
        setVideos3(pexelVideos.slice(onethird * 2, res.data.videos.length))
      } catch (error) {
        console.error('Failed to fetch videos from Pexels:', error)
      } finally {
        setTimeout(() => {
          setLoading(false)
        }, 1000)
      }
    }

    fetchVideos()
  }, [term])

  const handleMouseEnter = (e) => {
    
      e.target.play()
      e.target.setAttribute('controls', true)
    
  }

  const handleMouseLeave = (e) => { 
      e.target.pause()
     e.target.removeAttribute('controls')
     // on mobile controls should alwasy be ture
     
  }
  if (loading) {
    return <Loader />
  }
  return (
    <div className='VgalleryContainer'>
      <div className='vcol__1'>
        {videos3.map(video => (
          
          <video key={video.id}  controls={false}  onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave} className='media-card'>
            <source src={video.src} type='video/mp4' />
          </video>
        ))}
      </div>
      <div className='vcol__2'>
        {videos2.map(video => (
          <video  key={video.id} controls={false}  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}  className='media-card'>
            <source src={video.src} type='video/mp4' />
          </video>
        ))}
      </div>
      <div className='vcol__3'>
        {videos1.map(video => (
          <video  key={video.id} controls={false}  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}  className='media-card'>
            <source src={video.src} type='video/mp4' />
          </video>
        ))}
      </div>
    </div>
  )
}

// VideoGallery.propTypes = {
//   term: PropTypes.string.isRequired,
// };
