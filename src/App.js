import './App.css';
import Navigation from './components/Navigation/Navigation';
import Header from './components/Header/Header';
import Education from './components/Education/Education';
import Experience from './components/Experience/Experience';
import Skills from './components/Skills/Skills';
import Acheivements from './components/Acheivements/Acheivements';
import Project from './components/Projects/Project';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <Education />
      <Experience />
      <Skills />
      <Acheivements />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
