import LivrosDaFileira from "../LivrosDaFileira/LivrosDaFileira"
import styles from "./styles.module.css"

export default function FileiraLivros(){
    return(
        <div className={styles.livrosPcategoria}>
                
        <div className={styles.cabecalho}>
            <p className={styles.categoria}>Best Seller</p>
            <p className={styles.btnVermais}>Ver mais</p>
        </div>
        
        <div className={styles.fileiraLivros}>
            
            <LivrosDaFileira />
            <LivrosDaFileira />
            <LivrosDaFileira />
            <LivrosDaFileira />
        
        </div>
    </div>
    )
}