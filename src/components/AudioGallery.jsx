// import React from 'react'
import { useEffect, useState } from 'react'
import '../styles/audio.css'
import { useSearch } from '../context/SearchContext'
import Loader from './Loader'

export default function AudioGallery () {
  const [audioFiles, setAudioFiles] = useState([])
  const [loading, setLoading] = useState(true)
  const { search } = useSearch()
  let query = search?.term || 'nature'

  const API_key = 'GkqIW8adhB9J4yd01SclNDRwqUlj5PhDMXj5Dqki'
  // https://freesound.o…rg/apiv2/search/text/?query=dog&token

  useEffect(() => {

    const fetchAudio = async () => {
  try {
    const response = await fetch(
      `https://freesound.org/apiv2/search/text/?query=${query}`,
      {
        headers: {
          Authorization: `Token ${API_key}` // ✅ use Authorization header
        }
      }
    )
    const data = await response.json()
    console.log('Audio data fetched successfully:>>><<<<<', data)

  // For each result, fetch details
  const detailsPromises = data.results.map(async item => {
    try {
      const detailRes = await fetch(
      `https://freesound.org/apiv2/sounds/${item.id}/`,
      {
        headers: {
          Authorization: `Token ${API_key}`
        }
      }
    )
    const detailData = await detailRes.json()
    return detailData
    } catch (error) {
      console.log("Error in fetching details", error);

    }

  })
  const audioFiles = await Promise.all(detailsPromises)
  const newAFiles = audioFiles.map(audio=>({
    id: audio.id,
    artist: audio.username,
    url: audio.previews['preview-hq-mp3'],
    img: audio.images['spectral_m'],
    download: audio.download,
    // title: audio.pack_name

  }))
  setAudioFiles(newAFiles)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching audio data:', error)
      } finally {
        // setLoading(false)
      }
    }
    fetchAudio()
  }, [query])


  if (loading) {
      return <Loader />
    }

  return (
    <div className='audio_Container'>
      <div className='Acol'>
        {audioFiles.map(audio => {
          return (
            <div className='audio_Card' key={audio.id}>
              <div className="audioImg">
                <img src={`${audio.img}`} alt="image is not found" />
              </div>
              <div className='audio_Info'>
                <h3>{audio.title}</h3>
                <p>{audio.artist}</p>
              </div>
              <audio controls>
                <source src={audio.url} />
                Your browser does not support the audio element.
              </audio>
            </div>
          )
        })}  
      </div>
    </div>
  )
}
