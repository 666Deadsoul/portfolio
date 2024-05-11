import logo from './logo.svg';
import './App.css';
import Menu from './components/menu';
import Home from './components/home';
import About from './components/about';
import Project from './components/project';
import Contact from './components/contact';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';

function App() {
  return (
   <>
    <Menu/>
    <Home/>
    <About/>
    <Project/>
    <Contact/>
   </>
  );
}

export default App;
{/* <Router>
<Menu />
<Routes>
<Route exact path="/" Component={Home} />
<Route path="/about" Component={About} />
<Route path="/projects" Component={Project} />
<Route path="/contact" Component={Contact} />
</Routes>
</Router> */}