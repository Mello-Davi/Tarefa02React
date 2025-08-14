import banner from "../../assets/banner.png"
import FileiraLivros from "../../components/FileiraLivros/FileiraLivros"
import styles from "./styles.module.css"

export default function Home(){
    return(
        <div className={styles.mainHome}>
            <img src={banner} alt="banner de desconto" id={styles.banner}/>

            <FileiraLivros />
            
        </div>
    )
}