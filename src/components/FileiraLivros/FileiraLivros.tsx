import useGetLivros from "../../hooks/useEffect"
import LivrosDaFileira from "../LivrosDaFileira/LivrosDaFileira"
import styles from "./styles.module.css"
import { Link } from "react-router-dom"

interface fileiraProps {
    genero: string
}

export default function FileiraLivros({ genero }: fileiraProps ) 
{   const limite = 4
    const {livros} = useGetLivros({genero, limite})
    return(
        <div className={styles.livrosPcategoria}>
                
        <div className={styles.cabecalho}>
            <p className={styles.categoria}>{genero}</p>
            <Link to={`/livraria/genero/${genero}`} className={styles.btnVermais}>Ver mais</Link>
        </div>
        
        <div className={styles.fileiraLivros}>
            {livros.slice(0,8).map((livro) => (
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