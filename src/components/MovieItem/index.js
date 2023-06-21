// Write your code here

import ReactPlayer from 'react-player'

import Popup from 'reactjs-popup'

import {IoMdClose} from 'react-icons/io'

import './index.css'

const MovieItem = props => {
  const {movieDetails} = props

  const renderActionMovies = () => {
    const {thumbnailUrl, videoUrl} = movieDetails
    return (
      <Popup
        modal
        trigger={
          <img className="thumbnail-img" src={thumbnailUrl} alt="thumbnail" />
        }
        className="popup-content"
      >
        {close => (
          <>
            <div className="modal-display-container">
              <button
                type="button"
                data-testid="closeButton"
                className="close-button"
                onClick={() => close()}
              >
                <IoMdClose className="icon-img" />
              </button>
              <ReactPlayer url={videoUrl} className="video-player" />
            </div>
          </>
        )}
      </Popup>
    )
  }

  return (
    <>
      <div className="slider-container">{renderActionMovies()}</div>
    </>
  )
}

export default MovieItem
