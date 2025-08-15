import { useEffect, useState } from "react"
import LivrosDaFileira from "../LivrosDaFileira/LivrosDaFileira"
import styles from "./styles.module.css"
import axios from "axios"
import { Link } from "react-router-dom"

export default function FileiraLivros({ genero }: fileiraProps ) 
{

    return(
        <div className={styles.livrosPcategoria}>
                
        <div className={styles.cabecalho}>
            <p className={styles.categoria}>{genero}</p>
            <Link to={`/livraria/genero/${genero}`} className={styles.btnVermais}>Ver mais</Link>
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