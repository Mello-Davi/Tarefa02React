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
    
    useEffect(()=> {
        const config = {
            params: {
                genero,
                _limit: limite
            },
            timeout: 1000
        }

        axios.get('http://localhost:3002/livros?', config)
        .then(response => setLivros(response.data))
        .catch(error => console.error('Algo deu errado: ' + error))
    }, [genero, limite])    
    return{livros}
}