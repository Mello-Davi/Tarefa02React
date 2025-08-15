import { useEffect, useState } from "react"
import axios from "axios"

interface fileiraProps {
    genero: string,
    limite?: number
}
interface livro {
    id: number,
    titulo: string,
    autor: string,
    genero: string,
    preco: number,
    sinopse: string,
    capa: string
}

export default function useGetLivros({genero, limite}: fileiraProps){


    const [livros, setLivros] = useState<livro[]>([])
    const config = {
        params: {
            genero: genero,
            _limt: limite
        },
        timeout: 1000
    }
    useEffect(()=> {
        axios.get('http://localhost:3002/livros?', config)
        .then(response => setLivros(response.data))
        .catch(error => console.error('Algo deu errado: ' + error))
    }, [])
    return(livros)
}