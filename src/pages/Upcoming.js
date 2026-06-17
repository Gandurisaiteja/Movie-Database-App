import {useEffect, useState} from 'react'

import {getUpcomingMovies} from '../services/api'

import MovieCard from '../components/MovieCard'
import Pagination from '../components/Pagination'

import './Upcoming.css'

function Upcoming() {
  const [movies, setMovies] = useState([])

  const [page, setPage] = useState(1)

  useEffect(() => {
    fetchMovies()
  }, [page])

  const fetchMovies = async () => {
    const response = await getUpcomingMovies(page)

    setMovies(response.results)
  }

  return (
    <div className="upcoming-container">
      <h1 className="upcoming-title">Upcoming</h1>

      <div className="upcoming-grid">
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>

      <Pagination page={page} setPage={setPage} />
    </div>
  )
}

export default Upcoming
