import logo from './logo.svg';
import './styles/App.css';
import {Routes, Route} from 'react-router-dom'
import About from './About';
import Contact from './Contact';
import Home from './Home';
import NavBar from './NavBar';
import Create from './Create';
function App() {
  return (

  <div className="app">
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/create" element={<Create />} />
    </Routes>
  </div>
  );
}

export default App;
