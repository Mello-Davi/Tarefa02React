import styles from "./styles.module.css"
import { Link } from "react-router-dom"
import seta from "../../assets/Vector.png"

export default function LivrosCategoria(){
    return(
        <div className={styles.cartoesEcategoria}>
                <div className={styles.botaoContainer}>
                    <Link to="/livraria/home" className={styles.return}>
                        <img src={seta} alt="" />
                        <p>Best Seller</p>
                    </Link>
                </div>

                
                <div className={styles.livros}>
                    
                    <div className={styles.card}>
                        <img src="" alt="" />
                        
                        <div className={styles.especificacoes}>
                            <div className={styles.tituloAutor}>
                                <p className={styles.titulo}>Duna</p>
                                <p className={styles.autor}>Frank Herbert</p>
                            </div>
                            
                            <div className={styles.precoContainer}>
                                <p className={styles.preco}>R$87,75</p>
                            </div>
                        
                        </div>
                    </div>
                </div>
            </div>
    )
}