import { useSearch } from '../context/SearchContext'
import '../styles/search.css'
import { useState, useEffect } from 'react'


export default function Search () {
  const [Localsearch , setLocalSearch] = useState({term: '', type: 'images'})
  const {search, setSearch} = useSearch()

  useEffect(() => {
    if (Search) {
      setLocalSearch(search)
      
    }
  }, [search]);
  
  const handleSearch = () =>{
    setSearch(Localsearch)
  }
  return (
    <div className='search__box'>
      <input
        type='text'
        value={Localsearch.term}
        onChange={(e) => setLocalSearch({ ...Localsearch, term: e.target.value })}
        placeholder='Search here...'
        className='search-input'
      />
      <div className='btn__container'>
        <select value={Localsearch.type} 
        onChange={(e) => setLocalSearch({ ...Localsearch, type: e.target.value })} 
        className='dropdown'>
          <option  value='Images'>Images</option>
          <option value='Videos'>Videos</option>
          <option value='Audios'>Audios</option>
        </select>
        <div className='search__button'>
          <button onClick={handleSearch}>Search</button>
        </div>
      </div>
    </div>
  )
}
