import '../styles/search.css'

export default function Search () {
  return (
    <div className='search__box'>
      <input
        type='text'
        placeholder='Search here...'
        className='search-input'
      />
      <div className='btn__container'>
        <select className='dropdown'>
          <option value='images'>All</option>
          <option value='images'>Image</option>
          <option value='video'>Video</option>
          <option value='audio'>Audio</option>
        </select>
        <div className='search__button'>
          <button>Search</button>
        </div>
      </div>
    </div>
  )
}
