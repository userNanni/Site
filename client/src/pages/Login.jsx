import React from 'react'
import { Link } from 'react-router-dom'

const login = () => {
    return (
        <div className='auth'>
            <h1>Login</h1>
            <form>
                <input required type="text" placeholder='username' />
                <input required type="password" placeholder='password' />
                <button>Login</button>
                <p>Erro</p>
                <span> Não tem conta ? <Link className='Link' to="/register">Cadastre-se agora</Link>
                </span>
            </form>
        </div>
    )
}

export default login