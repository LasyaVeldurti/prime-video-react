// Write your code here
import MoviesSlider from '../MoviesSlider'

import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props

  return (
    <div className="bg-container" data-testid="movies">
      <img
        className="banner-img"
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
      />

      <MoviesSlider moviesList={moviesList} />
    </div>
  )
}

export default PrimeVideo
