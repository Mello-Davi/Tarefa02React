import styles from "./styles.module.css"
import { Link, useParams } from "react-router-dom"
import seta from "../../assets/Vector.png"
import useGetLivros from "../../hooks/useEffect"
import LivroCard from "../LivroCard/LivroCard"

export default function LivrosCategoria( ){
    const { genero } = useParams();
    const generoHook = genero || '';
    const { livros } = useGetLivros({ genero: generoHook });

    return(
            <div className={styles.cartoesEcategoria}>

                <div className={styles.botaoContainer}>
                    <Link to="/livraria/home" className={styles.return}>
                        <img src={seta} alt="" />
                        <p>{genero}</p>
                    </Link>
                </div>

                
                <div className={styles.livros}>
                    {livros.map((livro) => (
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