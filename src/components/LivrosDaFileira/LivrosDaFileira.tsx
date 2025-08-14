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

export default function LivrosDaFileira({ id, titulo, autor, genero, preco, sinopse, capa }: LivroCardProps){

    return(
        <div className={styles.livro}>
            <div className={styles.espacoCapa}>
                <img src="" alt="" className={styles.capa}/>
            </div>
            <div className={styles.especificacoes}>
                <div className={styles.tituloAutor}>
                    <p className={styles.titulo}>Dune</p>
                    <p className={styles.autor}>Frank Herbert</p>
                </div>
                <p className={styles.preco}>R$ 87,75</p>
            </div>

        </div>
    )
}