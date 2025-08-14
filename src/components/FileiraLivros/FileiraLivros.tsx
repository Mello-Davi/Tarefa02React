import LivrosDaFileira from "../LivrosDaFileira/LivrosDaFileira"
import styles from "./styles.module.css"

interface fileiraProps {
    genero: string,
}
const livros = [
    {
        id: 1,
        titulo: "O Código Da Vinci",
        autor: "Dan Brown",
        genero: "Best-sellers",
        preco: 39.90,
        sinopse: "Robert Langdon, um professor de simbologia de Harvard, é chamado a investigar o assassinato misterioso do curador do Museu do Louvre. Ao lado da criptóloga Sophie Neveu, ele segue pistas ocultas em obras de arte renascentistas, revelando um segredo milenar que poderia abalar os alicerces do Cristianismo. Em uma corrida contra o tempo, Langdon e Sophie enfrentam a ameaça de uma organização secreta determinada a proteger este segredo a qualquer custo. Repleto de enigmas complexos, perseguições emocionantes e conspirações religiosas, este thriller envolvente explora a interseção entre história, arte e mistério.",
        capa: "https://a-static.mlcdn.com.br/800x560/livro-o-codigo-da-vinci-robert-langdon-livro-2/magazineluiza/089299600/9d4dbf21f0f6636ab5cb3952da44ca63.jpg"
    },
    {
        id: 2,
        titulo: "A Garota no Trem",
        autor: "Paula Hawkins",
        genero: "Best-sellers",
        preco: 34.50,
        sinopse: "Rachel Watson pega o mesmo trem todas as manhãs, observando pela janela um casal aparentemente perfeito em sua casa de sonho. Porém, quando vê algo chocante, ela se vê envolvida em um mistério angustiante. Ao tentar descobrir a verdade, Rachel mergulha em um mundo de segredos obscuros, mentiras e traições. Sua própria vida se entrelaça com o destino do casal e, enquanto desvenda as camadas de sua memória fragmentada, percebe que pode estar mais envolvida do que jamais imaginou. Um suspense psicológico eletrizante que desafia as percepções de verdade e ilusão.",
        capa: "https://m.media-amazon.com/images/I/A1veR5tElLL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        id: 3,
        titulo: "O Alquimista",
        autor: "Paulo Coelho",
        genero: "Best-sellers",
        preco: 29.90,
        sinopse: "Santiago, um jovem pastor andaluz, sonha repetidamente com um tesouro escondido nas Pirâmides do Egito. Convencido de que é um presságio, ele abandona tudo para seguir sua Lenda Pessoal. Em sua jornada, encontra personagens enigmáticos, como um rei misterioso, um comerciante de cristais e um alquimista sábio que o guia na busca pelo autoconhecimento. Entre desafios e descobertas, Santiago aprende que o verdadeiro tesouro está em sua jornada interior. Uma fábula espiritual que explora temas de destino, propósito e a conexão entre o universo e os sonhos humanos.",
        capa: "https://m.media-amazon.com/images/I/81slUinjTlS.jpg"
    },
    {
        id: 4,
        titulo: "Jogos Vorazes",
        autor: "Suzanne Collins",
        genero: "Best-sellers",
        preco: 42.90,
        sinopse: "Em um futuro distópico, a nação de Panem é dividida em doze distritos, controlados com mão de ferro pela Capital. Como punição por uma rebelião passada, cada distrito é obrigado a enviar um garoto e uma garota para os Jogos Vorazes, um reality show brutal onde apenas um sai vivo. Katniss Everdeen se oferece como tributo no lugar de sua irmã, embarcando em uma batalha pela sobrevivência. Enquanto enfrenta inimigos mortais e uma Capital manipuladora, Katniss se torna o símbolo de esperança e revolução. Uma saga emocionante sobre coragem, sacrifício e o poder da resistência.",
        capa: "https://m.media-amazon.com/images/I/61zBhzjS4LL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        id: 5,
        titulo: "O Caçador de Pipas",
        autor: "Khaled Hosseini",
        genero: "Best-sellers",
        preco: 37.00,
        sinopse: "Amir e Hassan cresceram juntos em Cabul, Afeganistão, mas pertencem a mundos diferentes. Amir, filho de um rico comerciante, e Hassan, o filho leal de um servo, compartilham um vínculo inseparável. No entanto, um ato de covardia e traição destrói essa amizade, assombrando Amir por toda a vida. Anos depois, já adulto e vivendo nos EUA, Amir retorna ao Afeganistão devastado pela guerra para buscar redenção. Uma história comovente sobre amor, culpa, perdão e o poder de expiação, explorando a complexidade das relações humanas e as consequências das escolhas.",
        capa: "https://m.media-amazon.com/images/I/81yVzXTgLzL._AC_UF1000,1000_QL80_.jpg"
    }
]

export default function FileiraLivros({ genero }: fileiraProps ) {
    return(
        <div className={styles.livrosPcategoria}>
                
        <div className={styles.cabecalho}>
            <p className={styles.categoria}>{genero}</p>
            <p className={styles.btnVermais}>Ver mais</p>
        </div>
        
        <div className={styles.fileiraLivros}>
            {livros.slice(0,4).map((livro) => (
                <LivrosDaFileira 
                    autor={livro.autor}
                    capa={livro.capa}
                    genero={livro.genero}
                    id={livro.id}
                    preco={livro.preco}
                    sinopse={livro.sinopse}
                    titulo={livro.titulo}
                    key={livro.id}
                />
            ))}
        </div>
    </div>
    )
}