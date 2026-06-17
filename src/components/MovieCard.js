import {useHistory} from 'react-router-dom'

import {imageUrl} from '../services/api'

import './MovieCard.css'

function MovieCard({movie}) {
  const history = useHistory()

  const goToDetails = () => {
    history.push(`/movie/${movie.id}`)
  }

  return (
    <div className="movie-card">
      <img src={`${imageUrl}${movie.poster_path}`} alt={movie.title} />

      <div className="movie-card-content">
        <h3>{movie.title}</h3>

        <p>{movie.vote_average}</p>

        <button onClick={goToDetails}>View Details</button>
      </div>
    </div>
  )
}

export default MovieCard
