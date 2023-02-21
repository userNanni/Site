import React from 'react'
import { Link } from 'react-router-dom'

const register = () => {
    return (
        <div className='auth'>
            <h1>Cadastro</h1>
            <form>
                <input required type="text" placeholder='username' />
                <input required type="email" placeholder='email' />
                <input required type="password" placeholder='password' />
                <button>Cadastro</button>
                <p>Erro</p>
                <span> já tem conta ? <Link className='Link' to="/login">Faça seu login</Link>
                </span>
            </form>
        </div>
    )
}

export default register