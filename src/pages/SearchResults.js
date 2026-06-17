import {useEffect, useState} from 'react'

import {useLocation} from 'react-router-dom'

import {searchMovies} from '../services/api'

import MovieCard from '../components/MovieCard'

import './SearchResults.css'

function SearchResults() {
  const [movies, setMovies] = useState([])

  const location = useLocation()

  const query = new URLSearchParams(location.search).get('q')

  useEffect(() => {
    fetchMovies()
  }, [query])

  const fetchMovies = async () => {
    const response = await searchMovies(query, 1)

    setMovies(response.results)
  }

  return (
    <div className="search-container">
      <h1 className="search-title">Search Results</h1>

      <div className="search-grid">
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  )
}

export default SearchResults
