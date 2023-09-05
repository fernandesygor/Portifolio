import styles from './Presentation.module.css'
import ButtonA from '../elements/ButtonA'
import { useEffect, useState } from 'react'


function Presentation(){
    const [text, setText] = useState('')
    const toRotate = ['Ygor Francisco!', 'Desenvolvedor Front End', 'Product Manager']
    const [loop,setLoop] = useState(0)


    useEffect(()=>{
        let ticker = setInterval(2000) 
        return()=> {clearInterval(ticker)}   

    },[text])


    return(
        <div className={styles.Presentation} id="Presentation">
            <p><strong>Bem-vindo ao meu Portfólio</strong></p>
            <h1>Olá, eu sou Ygor Fernades!</h1>
            <p> 
                Sou um apaixonado por tecnologia e soluções inovadoras.
                Como Product Manager, eu tenho o compromisso de resolver problemas
                complexos e trazer resultados excepcionais para os negócios.
                Meus projetos já geraram milhões de reais em receita anual
                estou sempre em busca de novos desafios para superar.
            </p>
            <ButtonA link='https://www.linkedin.com/in/ygor-ramos-57a648184/'  text='Conecte-se comigo!'/>
            
        </div>
    )

    
}

export default Presentation