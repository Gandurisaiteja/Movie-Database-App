import {useEffect, useState} from 'react'

import {getPopularMovies} from '../services/api'

import MovieCard from '../components/MovieCard'
import Pagination from '../components/Pagination'

import './Popular.css'

function Popular() {
  const [movies, setMovies] = useState([])

  const [page, setPage] = useState(1)

  useEffect(() => {
    fetchMovies()
  }, [page])

  const fetchMovies = async () => {
    const response = await getPopularMovies(page)

    setMovies(response.results)
  }

  return (
    <div className="popular-container">
      <h1 className="popular-title">Popular Movies</h1>

      <div className="popular-grid">
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>

      <Pagination page={page} setPage={setPage} />
    </div>
  )
}

export default Popular
