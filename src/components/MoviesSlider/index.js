// Write your code here

import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import MovieItem from '../MovieItem'

const MoviesSlider = props => {
  const {moviesList} = props

  const settings = {
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    className: 'slides',
  }

  return (
    <>
      <h1 className="heading">Action Movies</h1>

      <Slider {...settings}>
        {moviesList.map(eachMovie => {
          if (eachMovie.categoryId === 'ACTION') {
            return <MovieItem key={eachMovie.id} movieDetails={eachMovie} />
          }
          return ''
        })}
      </Slider>

      <h1 className="heading">Comedy Movies</h1>
      <Slider {...settings}>
        {moviesList.map(eachMovie => {
          if (eachMovie.categoryId === 'COMEDY') {
            return <MovieItem key={eachMovie.id} movieDetails={eachMovie} />
          }
          return ''
        })}
      </Slider>
    </>
  )
}
export default MoviesSlider
