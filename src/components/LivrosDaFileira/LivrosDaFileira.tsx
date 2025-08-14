import styles from "./styles.module.css"

export default function LivrosDaFileira(){
    return(
        <div className={styles.livro}>
            <div className={styles.espacoCapa}>
                <img src="" alt="" className={styles.capa}/>
            </div>
            <div className={styles.especificacoes}>
                <div className={styles.tituloAutor}>
                    <p className={styles.titulo}>Dune</p>
                    <p className={styles.autor}>Frank Herbert</p>
                </div>
                <p className={styles.preco}>R$ 87,75</p>
            </div>

        </div>
    )
}