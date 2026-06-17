const API_KEY = '258cbf89c8634de115638834abff64ea'

const BASE_URL = 'https://api.themoviedb.org/3'

export const imageUrl = 'https://image.tmdb.org/t/p/w500'

export const getPopularMovies = async page => {
  const response = await fetch(
    `${BASE_URL}/movie/popular?api_key=${API_KEY}&page=${page}`,
  )

  return response.json()
}

export const getTopRatedMovies = async page => {
  const response = await fetch(
    `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&page=${page}`,
  )

  return response.json()
}

export const getUpcomingMovies = async page => {
  const response = await fetch(
    `${BASE_URL}/movie/upcoming?api_key=${API_KEY}&page=${page}`,
  )

  return response.json()
}

export const getMovieDetails = async id => {
  const response = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`)

  return response.json()
}

export const getMovieCast = async id => {
  const response = await fetch(
    `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`,
  )

  return response.json()
}

export const searchMovies = async (query, page) => {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&page=${page}`,
  )

  return response.json()
}
