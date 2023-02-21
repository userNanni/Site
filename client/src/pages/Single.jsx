import React from 'react';
import { Link } from "react-router-dom";
import img1 from "../img/ePaHRBa-hellsing-ultimate-wallpaper.jpg";
import img2 from "../img/wallpaperflare.com_wallpaper.jpg";
import { GoPencil, GoTrashcan } from "react-icons/go";
import Menu from '../components/Menu';

const Single = () => {
    return (
        <div className='single'>
            <div className="content">
                <img src={img2} alt="" />
                <div className="user">
                    <img src={img1} alt="" />
                    <div className="info">
                        <span>Nanni</span>
                        <p>Publicado a 2 dias</p>
                    </div>
                    <div className="edit">
                        <Link className='link' to={`/write?edit=2`}>
                            <GoPencil />
                        </Link>
                        <Link className='link' to={`/write?edit=2`}>
                            <GoTrashcan />
                        </Link>
                    </div>
                </div>

                <h1>Título</h1>
                <p>
                    <br />
                    Paragrafo
                    <br />
                    Paragrafo
                    <br />
                    Paragrafo
                    <br />
                </p>
            </div>
            <Menu />
        </div>
    )
}

export default Single