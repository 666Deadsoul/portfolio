import logo from './logo.svg';
import './App.css';
import Menu from './components/menu';
import Home from './components/home';
import About from './components/about';
import Project from './components/project';
import Contact from './components/contact';

function App() {
  return (
    <div className="App">
    <Menu />
      <section>
        <Home />
      </section>
      <section>
        <About />
      </section>
      <section>
        <Project />
      </section>
      <section>
        <Contact />
      </section>
    </div>
  );
}

export default App;
