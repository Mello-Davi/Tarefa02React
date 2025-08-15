import styles from "./styles.module.css"
import lupa from "../../assets/Search.png"
import LivrosCategoria from "../../components/LivrosCategoria/LivrosCategoria"



export default function Genero(){
    return(
        <div className={styles.mainGenero}>
            <div className={styles.barraPesquisa}>
                <button className={styles.lupa}><img src={lupa} alt="" /></button>
                <input type="text" className={styles.input} placeholder="Pesquisar por título"/>
            </div>
            <LivrosCategoria />
        </div>
    )
}