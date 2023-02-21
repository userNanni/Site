import React, { useState } from 'react'
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';

const Write = () => {

    const [value, setValue] = useState('');

    console.log(value);

    return (
        <div className='add'>
            <div className="content">
                <input type="text" placeholder='Title' />
                <div className="editorContainer">
                    <ReactQuill theme="snow" value={value} onChange={setValue} />
                </div>
            </div>
            <div className="menu">
                <div className="item">
                    <h1>Publish</h1>
                    <span>
                        <b>Status: </b> Draft
                    </span>
                    <span>
                        <b>Visibility: </b> Public
                    </span>
                    <input className='file' style={{ display: "none" }} type="file" id='file' />
                    <label className='file' htmlFor="file">Upload Image</label>
                    <div className="buttons">
                        <button>Save as a draft</button>
                        <button>Update</button>
                    </div>
                </div>
                <div className="item">
                    <h1>Category</h1>

                    <div className="category">
                        <input type="radio" name="category" value="CS" id="CS" />
                        <label htmlFor="CS">Ciência da Computação</label>
                    </div>
                    <div className="category">
                        <input type="radio" name="category" value="Cyber" id="Cyber" />
                        <label htmlFor="Cyber">Cibernética</label>
                    </div>
                    <div className="category">
                        <input type="radio" name="category" value="Dout" id="Dout" />
                        <label htmlFor="Dout">Doutrina</label>
                    </div>
                    <div className="category"><input type="radio" name="category" value="Dev" id="Dev" />
                        <label htmlFor="Dev">Desenvolvimento</label>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Write