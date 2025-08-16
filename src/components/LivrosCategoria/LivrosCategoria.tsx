import styles from "./styles.module.css"
import { Link, useParams } from "react-router-dom"
import seta from "../../assets/Vector.png"
import useGetLivros from "../../hooks/useEffect"
import LivroCard from "../LivroCard/LivroCard"

interface Props {
    genero: string
    procurarTitulo: string
}
export default function LivrosCategoria({ genero, procurarTitulo}: Props ){
    const { livros } = useGetLivros({ genero });

    const livrosFiltrados = livros.filter(livro => livro.titulo.toLowerCase().includes(procurarTitulo.toLowerCase()))
    return(
            <div className={styles.cartoesEcategoria}>

                <div className={styles.botaoContainer}>
                    <Link to="/livraria/home" className={styles.return}>
                        <img src={seta} alt="" />
                        <p>{genero}</p>
                    </Link>
                </div>

                
                <div className={styles.livros}>
                    {livrosFiltrados.map((livro) => (
                    <LivroCard 
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