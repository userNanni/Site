import React from 'react'
import { Link } from "react-router-dom"

const Home = () => {
    const posts = [
        {
            id: 1,
            title: "lorem",
            desc: "lorem",
            img: "lorem"
        },
    ];
    return (
        <div className='home'>
            <div className="posts">
                {posts.map((post) => (
                    <div className="post" key={post.id}>
                        <div className="img">
                            <img src={post.img} />
                        </div>
                        <div className="content">
                            <Link className='link' to={`/post/${post.id}`}>
                                <h1>{post.title}</h1>
                                <p>{post.desc}</p>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Home