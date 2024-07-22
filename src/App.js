import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Contacts from './components/Contacts';
import Skills from './components/Skills';
import Projects from './components/Projects';

function App() {
  return (
    <main>
      <Navbar />
      <Home />
      <Skills />
      <Projects />
      <Contacts />

    </main>
  );
}

export default App;
