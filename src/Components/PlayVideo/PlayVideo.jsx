import React from 'react'
import video1 from '../../assets/video.mp4'
import './PlayVideo.css'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import jack from '../../assets/jack.png'
import user_profile from '../../assets/user_profile.jpg'

const PlayVideo = () => {
    return (
        <div className='play-video'>
            <video src={video1} controls autoPlay></video>
            <h3>This is latest project on React js</h3>
            <div className="play-video-info">
                <p>1550 Views &bull; 2 days ago</p>
                <div>
                    <span><img src={like} alt='' />125</span>
                    <span><img src={dislike} alt='' />2</span>
                    <span><img src={share} alt='' />Share</span>
                    <span><img src={save} alt='' />Save</span>
                </div>
            </div>

            <hr />

            <div className="publisher">
                <img src={jack} alt=''></img>
                <div>
                    <p>
                        GreatStack
                    </p>
                    <span>1M Suscribers</span>
                </div>
                <button>Subscribe</button>
            </div>
            <div className="vid-discription">
                <p>Channel that makes learning easy.</p>
                <p>Subscribe it.</p>
                <hr />
                <h4>130 comments</h4>
                <div className="comment">
                    <img src={user_profile} alt="" />
                    <div>
                        <h3>
                            Jack <span>1 day ago</span>
                        </h3>
                        <p>
                            Description
                        </p>
                        <div className="comment-action">
                            <img src={like} alt="" />
                            <span>244</span>
                            <img src={dislike} alt="" />
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default PlayVideo