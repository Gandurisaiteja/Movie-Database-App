import {Switch, Route} from 'react-router-dom'

import Navbar from './components/Navbar'

import Popular from './pages/Popular'
import TopRated from './pages/TopRated'
import Upcoming from './pages/Upcoming'
import SearchResults from './pages/SearchResults'
import MovieDetails from './pages/MovieDetails'

import './App.css'

function App() {
  return (
    <>
      <Navbar />

      <Switch>
        <Route exact path="/" component={Popular} />

        <Route exact path="/top-rated" component={TopRated} />

        <Route exact path="/upcoming" component={Upcoming} />

        <Route exact path="/search" component={SearchResults} />

        <Route exact path="/movie/:id" component={MovieDetails} />
      </Switch>
    </>
  )
}

export default App
