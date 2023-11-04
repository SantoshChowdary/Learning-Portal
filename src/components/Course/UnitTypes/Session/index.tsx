import React from 'react'
import ReactPlayer from 'react-player/lazy'
import './index.css'


export const VideoSession = (props: any) => {
  const videoURL = 'https://youtu.be/YE7VzlLtp-4';

  return (
    <div className="video-section">
      <div className='react-video-player'>
        <ReactPlayer url={videoURL} controls width="80%" height="90%" />
      </div>
    </div>
  )
}
export default VideoSession