import axios from "axios"
import { useEffect, useState } from "react"

interface livro {
    id: number,
    titulo: string,
    autor: string,
    genero: string,
    preco: number,
    sinopse: string,
    capa: string
}

export default function useGetLivroInd(id: number) {
    const [livros, setLivros] = useState<livro[]>([])
    
    useEffect(()=> {
        axios.get(`http://localhost:3002/livros/${id}`)
        .then(response => setLivros(response.data))
        .catch(error => console.error('Algo deu errado: ' + error))
    }, [])
    return{livros}
}
