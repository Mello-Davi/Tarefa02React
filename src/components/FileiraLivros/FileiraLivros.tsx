import styles from "./styles.module.css"

export default function FileiraLivros(){
    return(
        <div className={styles.livrosPcategoria}>
                
        <div className={styles.cabecalho}>
            <p className={styles.categoria}>Best Seller</p>
            <p className={styles.btnVermais}>Ver mais</p>
        </div>
        
        <div className={styles.fileiraLivros}>
            
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
        
        </div>
    </div>
    )
}