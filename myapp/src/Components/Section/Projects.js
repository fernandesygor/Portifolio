import ButtonB from '../elements/ButtonB'
import styles from './Projcts.module.css'
import Card from '../elements/Card'
import lpdnc from '../../Image/projects/lpdnc.svg'
import lparquitetura from '../../Image/projects/lparquitetura.svg'
import Portifolio from '../../Image/projects/Portifolio.svg'


function Projects(){
    return(
        <div className={styles.projects} id="Projects">
            <h1>Projetos</h1>
            <Card 
            img={lpdnc}
            title="LP - DNC"
            tech=" HTML, CSS e JS " 
            descripton="Este é o projeto de desenvolvimento do módulo do curso de Tecnologia da escola DNC."
            repo='https://github.com/fernandesygor/Projeto-landingpage' 
            site='https://escoladnc.netlify.app' 
            />

            <Card 
            img={lparquitetura}
            title="LP - Tradição em projetos de arquitetura"
            tech=" HTML, CSS e JS " 
            descripton="Este é o projeto de desenvolvimento do módulo do curso de Tecnologia da escola DNC."
            repo='https://github.com/fernandesygor/Projeto-landing-page-Arquitetura' 
            site='https://landing-page-pag-arquitetura.netlify.app' />

            <Card
            img={Portifolio}
            title="LP - DNC"
            tech=" HTML, CSS e JS " 
            descripton="Este é o projeto de desenvolvimento do módulo do curso de Tecnologia da escola DNC."
            repo='' 
            site='' 
            />
            

            <ButtonB text='Acesse meu repositório' link='https://github.com/fernandesygor?tab=repositories' /> 
        </div>
    )

    
}

export default Projects