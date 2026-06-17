import {useEffect, useState} from 'react'

import {getTopRatedMovies} from '../services/api'

import MovieCard from '../components/MovieCard'
import Pagination from '../components/Pagination'

import './TopRated.css'

function TopRated() {
  const [movies, setMovies] = useState([])

  const [page, setPage] = useState(1)

  useEffect(() => {
    fetchMovies()
  }, [page])

  const fetchMovies = async () => {
    const response = await getTopRatedMovies(page)

    setMovies(response.results)
  }

  return (
    <div className="toprated-container">
      <h1 className="toprated-title">Top Rated</h1>

      <div className="toprated-grid">
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>

      <Pagination page={page} setPage={setPage} />
    </div>
  )
}

export default TopRated
