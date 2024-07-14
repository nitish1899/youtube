import React from 'react'
import video1 from '../../assets/video.mp4'
import './PlayVideo.css'

const PlayVideo = () => {
    return (
        <div className='play-video'>
            <video src={video1} controls autoPlay></video>
        </div>
    )
}

export default PlayVideo