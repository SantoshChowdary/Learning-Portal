import React from 'react'
import ReactPlayer from 'react-player/lazy'
import './index.css'


export const VideoSession = (props: any) => {
  const {shouldDisplaySideMenu} = props;
  const videoURL = 'https://youtu.be/YE7VzlLtp-4';

  return (
    <div className="video-section" style={{alignItems: shouldDisplaySideMenu ? "flex-start" : "center"}}>
      <div className='react-video-player'>
        <div className="player-container">
          <ReactPlayer url={videoURL} className="react-player" controls width="inherit" height="inherit" />
        </div>
      </div>
    </div>
  )
}
export default VideoSession