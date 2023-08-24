
import { FaInstagram,FaLinkedin,FaGithub } from "react-icons/fa";
import styles from './Navbar.module.css'
import Nav from 'react-bootstrap/Nav'

function Navbar(){
    return(
        <div className= {styles.navbar}> 
            <ul>
                <li><Nav.Link href="#Presentation">Apresentação</Nav.Link></li>
                <li><Nav.Link href="#Skills">Habilidads</Nav.Link></li>
                <li><Nav.Link href="#Projects">Projetos</Nav.Link></li>
            </ul>
            <ul>
                <li><a href="https://www.instagram.com/ygoor_ramos/"><FaInstagram size={30}/></a></li>
                <li><a href="https://www.linkedin.com/in/ygor-ramos-57a648184/"><FaLinkedin size={30}/></a></li>
                <li><a href="https://github.com/fernandesygor"><FaGithub size={30}/></a></li>
            </ul>
            
        </div>
    )


}

export default Navbar