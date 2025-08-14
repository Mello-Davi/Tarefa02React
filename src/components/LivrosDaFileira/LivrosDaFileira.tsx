import styles from "./styles.module.css"

interface LivroCardProps {
    id: number
    titulo: string
    autor: string
    genero: string
    preco: number
    sinopse: string
    capa: string
}


          


export default function LivrosDaFileira({ id, titulo, autor, preco, capa }: LivroCardProps){

   
    return(
        <div className={styles.livro}>
            <div className={styles.espacoCapa}>
                <img src={capa} alt="" className={styles.capa}/>
            </div>
            <div className={styles.especificacoes}>
                <div className={styles.tituloAutor}>
                    <p className={styles.titulo}>{titulo}</p>
                    <p className={styles.autor}>{autor}</p>
                </div>
                <p className={styles.preco}>R${preco.toFixed(2)}</p>
            </div>

        </div>
    )
}