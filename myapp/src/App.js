
import './App.css';
import Navbar from './Components/Section/Navbar';
import Footer from './Components/Section/Footer';
import Presentation from './Components/Section/Presentation';
import Skills from './Components/Section/Skills';
import Projects from './Components/Section/Projects';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Presentation/>
      <Skills/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
