import styles from "./styles.module.css"
import lupa from "../../assets/Search.png"

export default function Genero(){
    return(
        <div className={styles.mainGenero}>
            <div className={styles.barraPesquisa}>
                <input type="text" className={styles.input} placeholder="Pesquisar por título"/>
                <button><img src={lupa} alt="" /></button>
            </div>
            
        </div>
    )
}