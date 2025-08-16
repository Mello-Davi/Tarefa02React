import styles from "./styles.module.css"
import lupa from "../../assets/Search.png"
import LivrosCategoria from "../../components/LivrosCategoria/LivrosCategoria"
import { useState } from "react";
import { useParams } from "react-router-dom";

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
    
    const { genero } = useParams();
    const [procurarTitulo, setProcurarTitulo] = useState("")

    return(
        <div className={styles.mainGenero}>
            <div className={styles.barraPesquisa}>
                <button className={styles.lupa}><img src={lupa} alt="" /></button>
                <input 
                type="text" 
                className={styles.input} 
                placeholder="Pesquisar por título"
                value={procurarTitulo}
                onChange={(e) => setProcurarTitulo(e.target.value)}
                />
            </div> 
            <div className={styles.genero}>
            {generos
            .filter( gen => gen === genero)
            .map((gen) => (
                <LivrosCategoria
                key={gen}
                genero={gen}
                procurarTitulo={procurarTitulo}
                />
            ))}
            </div>
           

        </div>
    )
}