import React from 'react'
import './Sidebar.css'
import home from '../../assets/home.png'
import game_icon from '../../assets/game_icon.png'
import automobiles from '../../assets/automobiles.png'
import sports from '../../assets/sports.png'
import entertainment from '../../assets/entertainment.png'
import tech from '../../assets/tech.png'
import music from '../../assets/music.png'
import blogs from '../../assets/blogs.png'
import news from '../../assets/news.png'
import jack from '../../assets/jack.png'
import simon from '../../assets/simon.png'
import tom from '../../assets/tom.png'
import megan from '../../assets/megan.png'
import cameron from '../../assets/cameron.png'

const Sidebar = ({ sidebar }) => {
    return (
        <div className={`sidebar ${sidebar ? "" : "small-sidebar"}`}>
            <div className="shortcut-links">
                <div className="side-link">
                    <img src={home} alt="" /> <p>home</p>
                </div>
                <div className="side-link">
                    <img src={game_icon} alt="" /> <p>game_icon</p>
                </div>
                <div className="side-link">
                    <img src={automobiles} alt="" /> <p>automobiles</p>
                </div>
                <div className="side-link">
                    <img src={sports} alt="" /> <p>sports</p>
                </div>
                <div className="side-link">
                    <img src={entertainment} alt="" /> <p>entertainment</p>
                </div>
                <div className="side-link">
                    <img src={tech} alt="" /> <p>tech</p>
                </div>
                <div className="side-link">
                    <img src={music} alt="" /> <p>music</p>
                </div>
                <div className="side-link">
                    <img src={blogs} alt="" /> <p>blogs</p>
                </div>
                <div className="side-link">
                    <img src={news} alt="" /> <p>news</p>
                </div>
            </div>

            <hr />

            <div className="subscribed-list">
                <h3>Subscribed</h3>
                <div className="side-link">
                    <img src={jack} alt="" /> <p>PuedDiPie</p>
                </div>
                <div className="side-link">
                    <img src={simon} alt="" /> <p>Jasprit</p>
                </div>
                <div className="side-link">
                    <img src={tom} alt="" /> <p>Bumrah</p>
                </div>
                <div className="side-link">
                    <img src={megan} alt="" /> <p>Hardik</p>
                </div>
                <div className="side-link">
                    <img src={cameron} alt="" /> <p>Rohit</p>
                </div>
            </div>
        </div>
    )
}

export default Sidebar