import { Link } from "react-router-dom"
import styles from "./styles.module.css"
import logo from "../../assets/Logo.png"
import profile from "../../assets/Profile.png"
import shop from "../../assets/Shop.png"

export default function Header(){
    return(
        <header>
            <nav className={styles.links}>
                <Link to="/home"> <img src={logo} alt="Logo" /></Link>
                <div className={styles.icones}>
                <Link to="/" className={styles.img}> <img src={profile} alt="Perfil" /> </Link>
                    <Link to="/cart" className={styles.img}> <img src={shop} alt="Carrinho" /> </Link>
                </div>
            </nav>
        </header>
    )
}