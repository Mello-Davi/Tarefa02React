import { useEffect, useState } from "react"
import LivrosDaFileira from "../LivrosDaFileira/LivrosDaFileira"
import styles from "./styles.module.css"
import axios from "axios"

interface fileiraProps {
    genero: string,
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

export default function FileiraLivros({ genero }: fileiraProps ) 
{
    const [livros, setLivros] = useState<livro[]>([])
    const config = {
        params: {
            genero: genero,
            _limt: 4
        },
        timeout: 1000
    }

    useEffect(()=> {
        axios.get('http://localhost:3002/livros?', config)
        .then(response => setLivros(response.data))
        .catch(error => console.error('Algo deu errado: ' + error))
    }, [])

    return(
        <div className={styles.livrosPcategoria}>
                
        <div className={styles.cabecalho}>
            <p className={styles.categoria}>{genero}</p>
            <p className={styles.btnVermais}>Ver mais</p>
        </div>
        
        <div className={styles.fileiraLivros}>
            {livros.slice(0,4).map((livro) => (
                <LivrosDaFileira 
                    autor={livro.autor}
                    capa={livro.capa}
                    genero={livro.genero}
                    id={livro.id}
                    preco={livro.preco}
                    sinopse={livro.sinopse}
                    titulo={livro.titulo}
                    key={livro.id}
                />
            ))}
        </div>
    </div>
    )
}