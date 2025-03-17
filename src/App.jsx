import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Work from './components/Work';
import Skills from './components/Skills';
import Footer from './components/Footer';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header></Header>
      <main>
        <About></About>
        <Work></Work>
        <Skills></Skills>
        <Footer></Footer>
      </main>

    </>
  );
}

export default App;
