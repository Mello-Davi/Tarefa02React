import banner from "../../assets/banner.png"
import styles from "./styles.module.css"

export default function Home(){
    return(
        <div className={styles.mainHome}>
            <img src={banner} alt="banner de desconto" id={styles.banner}/>

            <div className={styles.livrosPcategoria}>

            </div>
        </div>
    )
}