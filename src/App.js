import './App.scss';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Contacts from './components/Contacts';
import Skills from './components/Skills';
import Projects from './components/Projects';

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
