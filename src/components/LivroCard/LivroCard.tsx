import { Link } from "react-router-dom";
import styles from "./styles.module.css";

interface LivroCardProps {
    id: number
    titulo: string
    autor: string
    genero: string
    preco: number
    sinopse: string
    capa: string
}

export default function LivroCard({id, titulo, autor, preco, capa}: LivroCardProps){
    return(
        <Link to={`/livraria/livro/${id}`} className={styles.card}>
            <img src={capa} alt="" />
            
            <div className={styles.especificacoes}>
                <div className={styles.tituloAutor}>
                    <p className={styles.titulo}>{titulo}</p>
                    <p className={styles.autor}>{autor}</p>
                </div>
                
                <div className={styles.precoContainer}>
                    <p className={styles.preco}>R${preco.toFixed(2)}</p>
                </div>
            
            </div>
        </Link>
    )
}