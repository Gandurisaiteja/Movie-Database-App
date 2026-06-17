import {useEffect, useState} from 'react'

import {useParams} from 'react-router-dom'

import {getMovieDetails, getMovieCast, imageUrl} from '../services/api'

import CastCard from '../components/CastCard'

import './MovieDetails.css'

function MovieDetails() {
  const [movie, setMovie] = useState(null)

  const [cast, setCast] = useState([])

  const {id} = useParams()

  useEffect(() => {
    fetchMovieDetails()
    fetchMovieCast()
  }, [])

  const fetchMovieDetails = async () => {
    const response = await getMovieDetails(id)

    setMovie(response.data)
  }

  const fetchMovieCast = async () => {
    const response = await getMovieCast(id)

    setCast(response.data.cast)
  }

  if (!movie) {
    return <h1 className="loading">Loading...</h1>
  }

  return (
    <div className="details-container">
      <div className="details-top">
        <img src={`${imageUrl}${movie.poster_path}`} alt={movie.title} />

        <div className="details-content">
          <h1>{movie.title}</h1>

          <p>Rating: {movie.vote_average}</p>

          <p>Duration: {movie.runtime} mins</p>

          <p>Release Date: {movie.release_date}</p>

          <p>Genres: {movie.genres?.map(genre => genre.name).join(', ')}</p>

          <p>{movie.overview}</p>
        </div>
      </div>

      <h2 className="cast-title">Cast Details</h2>

      <div className="cast-grid">
        {cast.map(member => (
          <CastCard key={member.cast_id} cast={member} />
        ))}
      </div>
    </div>
  )
}

export default MovieDetails
