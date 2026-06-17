import {Link, useHistory} from 'react-router-dom'

import {useState} from 'react'

import './Navbar.css'

function Navbar() {
  const [search, setSearch] = useState('')

  const history = useHistory()

  const handleSearch = () => {
    if (search.trim() !== '') {
      history.push(`/search?q=${search}`)
    }
  }

  return (
    <div className='navbar'>
      <Link to='/' className='logo'>
        <h1>movieDB</h1>
      </Link>

      <div className='nav-links'>
        <Link to='/'>
          <p>Popular</p>
        </Link>

        <Link to='/top-rated'>Top Rated</Link>

        <Link to='/upcoming'>Upcoming</Link>
      </div>

      <div className='search-box'>
        <input
          type='text'
          placeholder='Search movie'
          value={search}
          onChange={e => setSearch(e.target.value)}
        />

        <button onClick={handleSearch}>Search</button>
      </div>
    </div>
  )
}

export default Navbar
