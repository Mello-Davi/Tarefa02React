import imagemLogin from "../../assets/login.png"
import logo from "../../assets/Logo.png"
import styles from "./styles.module.css"


export default function Login(){
    return(
        <div className={styles.imagemEforms}>
            <img src={imagemLogin} className={styles.banner} alt="imagem" />
            
            <div className={styles.logoWelcomeLogin}>
                <div className={styles.logoEwelcome}>
                   <img src={logo} alt="Imagem do Logo" />
                </div>   
                 
                <div className={styles.welcomeElogin}>
                    <h2>Bem vindo(a)!</h2>
                    <h1>Entre na sua conta</h1>
                    <form className={styles.emailSenha}>
                        <div className={styles.email}>
                            <label htmlFor="email">E-mail</label>
                            <input 
                                type="email"
                                className={styles.input}
                                placeholder='Digite aqui seu e-mail' 
                            />
                        </div>
                        <div className={styles.senha}>
                            <label htmlFor="password">Senha</label>
                            <input 
                                type="password"
                                className={styles.input}
                                placeholder='Digite aqui sua senha' 
                            />
                        </div>
                        
                        <div className={styles.botoes}>
                            <button className={styles.botaoEntrar}>Entrar</button>
                            <button className={styles.botaoCadastro}>Cadastre-se</button>
                        </div>
                    </form>
                </div>
            </div>
            
            
        </div>
    )
}