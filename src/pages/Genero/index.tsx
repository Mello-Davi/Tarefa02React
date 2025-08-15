import styles from "./styles.module.css"
import lupa from "../../assets/Search.png"
import LivrosCategoria from "../../components/LivrosCategoria/LivrosCategoria"

const generos = [
    "Best-sellers",
    "Clássicos",
    "Infantil",
    "Fantasia",
    "Suspense",
    "Distopia",
    "Ficção Científica",
];


export default function Genero(){
    return(
        <div className={styles.mainGenero}>
            <div className={styles.barraPesquisa}>
                <button className={styles.lupa}><img src={lupa} alt="" /></button>
                <input type="text" className={styles.input} placeholder="Pesquisar por título"/>
            </div> 
            <div className={styles.genero}>
            {generos.slice(0,1).map((genero) => (
                <LivrosCategoria
                key={genero}
                />
            ))}
            </div>
           

        </div>
    )
}