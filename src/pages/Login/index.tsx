import { useForm } from "react-hook-form"
import imagemLogin from "../../assets/login.png"
import logo from "../../assets/Logo.png"
import styles from "./styles.module.css"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useNavigate } from "react-router-dom"

const userSchema = z.object({
    email: z.string().nonempty('O email não pode ser vazio').email('Tem que ser um email válido'),
    senha: z.string().nonempty('A senha não pode ser vazia').min(12, 'A senha deve ter no mínimo 12 caracteres')
})

type User = z.infer<typeof userSchema>


export default function Login(){
    const navigate = useNavigate(); 

    const { register, handleSubmit, formState: {errors, isSubmitting}, setError } = useForm<User>({
        resolver: zodResolver(userSchema)
    })

    async function createUser(data: User) {
        try {
            await new Promise(resolve => setTimeout(resolve, 2000))
            console.log(data)
            
            navigate('/home');
        } catch {
            setError('root', {
                message: "Erro ao iniciar sessão."
            } );
        }
    }

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
                    <form onSubmit={handleSubmit(createUser)} className={styles.emailSenha}>
                        <div className={styles.email}>
                            
                            <label htmlFor="email">E-mail</label>
                            <input 
                                type="email"
                                className={styles.input}
                                placeholder='Digite aqui seu e-mail' 
                                {...register('email')}
                            />
                            {errors.email && <span>{errors.email.message}</span>}
                        </div>
                        <div className={styles.senha}>
                            
                            <label htmlFor="password">Senha</label>
                            <input 
                                type="password"
                                className={styles.input}
                                placeholder='Digite aqui sua senha' 
                                {...register('senha')}
                            />
                            {errors.senha && <span>{errors.senha.message}</span>}
                        </div>
                        
                        <div className={styles.botoes}>
                            <button disabled={isSubmitting} className={styles.botaoEntrar}>{isSubmitting ? 'Entrando...' : 'Entrar'}</button>
                            {errors.root && <span>{errors.root.message}</span>}
                            <button  className={styles.botaoCadastro} type="button">Cadastre-se</button>
                        </div>
                    </form>
                </div>
            </div>
            
            
        </div>
    )
}