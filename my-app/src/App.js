import logo from './logo.svg';
import './App.css';
import Menu from './components/menu';
import Home from './components/home';
import About from './components/about';
import Project from './components/project';
import Contact from './components/contact';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
    <Menu/>
    <Home/>
    <About/>
    <Project/>
    <Contact/>
    <Footer/>
    </div>
  );
}

export default App;
