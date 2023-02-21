import React from 'react'
import { Link } from 'react-router-dom';

const Menu = () => {
    const posts = [
        {
            id: 1,
            title: "lorem",
            desc: "lorem",
            img: "lorem"
        },
    ];

    return (
        <div className='menu'>
            <h2>Outros Posts</h2>
            <div className="posts">
                {posts.map((post) => (
                    <div className="post" key={post.id}>
                        <div className="img">
                            <img src={post.img} alt='' />
                        </div>
                        <div className="content">
                            <Link className='link' to={`/post/${post.id}`}>
                                <h3>{post.title}</h3>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Menu