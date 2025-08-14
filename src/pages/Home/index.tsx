import banner from "../../assets/banner.png"
import FileiraLivros from "../../components/FileiraLivros/FileiraLivros"
import styles from "./styles.module.css"

const generos = [
    "Best-Sellers",
    "Clássicos",
    "Infantil",
    "Fantasia",
    "Suspense",
    "Distopia",
    "Ficção Científica",
  ];

export default function Home(){
    return(
        <div className={styles.mainHome}>
            <img src={banner} alt="banner de desconto" id={styles.banner}/>

            {generos.map((genero) => (
                <FileiraLivros 
                   genero={genero} 
                />
            ))}
            
        </div>
    )
}