import React from 'react'
import ReactPlayer from 'react-player/lazy'
import './index.css'


export const VideoSession = (props: any) => {
  const videoURL = 'https://youtu.be/YE7VzlLtp-4';

  return (
    <div className="video-section">
      <div className='react-video-player'>
        <div className="player-container">
          <ReactPlayer url={videoURL} controls width="inherit" height="inherit" />
        </div>
      </div>
    </div>
  )
}
export default VideoSession