import { useState } from 'react'
import './index.scss'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function Home() {
    const [nome, setNome] = useState('')
    const [senha, setSenha] = useState('')

    const navigate = useNavigate()

    async function entrar() {
        
    }

    return (
        <div className='pagina-home'>
            <h1> ENTRAR </h1>

            <div className='campo'>
                <label htmlFor='nome'>Nome</label>
                <input
                    id='nome'
                    type='text'
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                />
            </div>

            <div className='campo'>
                <label htmlFor='senha'>Senha</label>
                <input
                    id='senha'
                    type='text'
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                />
            </div>

            <button onClick={entrar}>Entrar</button>
        </div>
    )
}
