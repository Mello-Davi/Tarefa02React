import styles from "./styles.module.css"
import seta from "../../assets/Vector.png"
import { useNavigate, useParams } from "react-router-dom"
import useGetLivroInd from "../../hooks/useGetLivro";

export default function Livro(){
    const navigate = useNavigate();
    const { idLivros } = useParams();
    const { livros } = useGetLivroInd(Number(idLivros));
    if (!livros || livros.length === 0 ){
        return <div>Carregando...</div>   
    }
    const livro = livros[0];

    return( 
        <div className={styles.mainLivro}>
            <div className={styles.btnReturnContainer}>
                <button onClick={() => navigate(-1)} className={styles.btnReturn}>
                    <img src={seta} alt="" />
                    <p>Detalhes do Livro</p>
                </button>
            </div>

            <div className={styles.capaTituloAutorSinopse}>
                <div className={styles.capa}>
                    <img src={livro.capa} alt="" className={styles.capaImg} />
                </div> 
                <div className={styles.tituloAutorSinopse}>
                    <div className={styles.tituloAutor}>
                        <p className={styles.titulo}>{livro.titulo}</p>
                        <p className={styles.autor}>{livro.autor}</p>
                    </div>
                    <div className={styles.sinopse}>
                        <p id={styles.sinopse}>Sinopse</p>
                        <p className={styles.descricao}>
                        {livro.sinopse}
                        </p>
                    </div>
                </div>
            </div>
            <div className={styles.botaoContainer}>
                <button className={styles.btnAddCart}>
                    <p className={styles.preco}>R${livro.preco.toFixed(2)}</p>
                    <p className={styles.adicionarCart}>Adicionar ao carrinho</p>
                </button>
            </div>
        </div>
    )
}