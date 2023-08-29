import { FaInstagram,FaLinkedin,FaGithub } from "react-icons/fa";
import styles from './Footer.module.css'


function Footer (){
    return(
        <div className={styles.footer}>
            <ul>
                <li><a href="https://www.instagram.com/ygoor_ramos/"><FaInstagram size={30}/></a></li>
                <li><a href="https://www.linkedin.com/in/ygor-ramos-57a648184/"><FaLinkedin size={30}/></a></li>
                <li><a href="https://github.com/fernandesygor"><FaGithub size={30}/></a></li>
            </ul>

            <p>ramos.ygor.123@gmail.com</p>
            <p>Ygor Fernandes © 2023</p>
        </div>
    )

    
}

export default Footer