import React from 'react'
import img1 from "../img/ePaHRBa-hellsing-ultimate-wallpaper.jpg"
import img2 from "../img/wallpaperflare.com_wallpaper.jpg";

const Single = () => {
    return (
        <div className='single'>
            <div className="content">
                <img src={img2} alt="" />
                <div className="user">
                    <img src={img1} alt="" />
                    <span>Nanni</span>
                    <p>Publicado a 2 dias</p>
                </div>
            </div>
            <div className="menu">

            </div>
        </div>
    )
}

export default Single