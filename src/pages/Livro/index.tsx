import styles from "./styles.module.css"
import seta from "../../assets/Vector.png"
import { Link, useNavigate } from "react-router-dom"

export default function Livro(){
    const navigate = useNavigate();

    return( 
        <div className={styles.mainLivro}>
            <div className={styles.btnReturnContainer}>
                <button onClick={() => navigate(-1)} className={styles.btnReturn}>
                    <img src={seta} alt="" />
                    <p>Detalhes do Livro</p>
                </button>
            </div>

            <div className={styles.capaTituloAutorSinopse}>
                <div className={styles.capa}>
                    <img src="" alt="" className={styles.capaImg} />
                </div>
                <div className={styles.tituloAutorSinopse}>
                    <div className={styles.tituloAutor}>
                        <p className={styles.titulo}>Duna</p>
                        <p className={styles.autor}>Frank Herbert</p>
                    </div>
                    <div className={styles.sinopse}>
                        <p id={styles.sinopse}>Sinopse</p>
                        <p className={styles.descricao}>
                        Duna se passa em um futuro distante, em meio a uma sociedade feudal interestelar na qual várias casas nobres controlam feudos planetários. A história acompanha o jovem Paul Atreides, cuja família aceita a administração do planeta Arrakis. Embora o planeta seja um deserto inóspito e escassamente povoado, é a única fonte de melange, ou "especiaria", uma droga que prolonga a vida e aumenta as habilidades mentais. A melange também é necessária para a navegação espacial, que exige um tipo de consciência multidimensional e presciência que só a droga proporciona. Como a melange só pode ser produzida em Arrakis, o controle do planeta é uma empreitada cobiçada e perigosa. A história explora as complexas interações de política, religião, ecologia, tecnologia e emoção humana, enquanto as facções do império se confrontam em uma luta pelo controle de Arrakis e de sua especiaria.
                        </p>
                    </div>
                </div>
            </div>
            <div className={styles.botaoContainer}>
                <button className={styles.btnAddCart}>
                    <p className={styles.preco}>R$87,75</p>
                    <p className={styles.adicionarCart}>Adicionar ao carrinho</p>
                </button>
            </div>
        </div>
    )
}