import logo from './logo.svg';
import './styles/App.css';
import {Routes, Route} from 'react-router-dom'
import About from './About';
import Contact from './Contact';
import Home from './Home';
import NavBar from './NavBar';
import Create from './Create';

let code = new URLSearchParams(window.location.search).get("code")

//if localStorage doesnt have a code, set it to the code from the URL
if (localStorage.getItem("code") == null && code !== null) {
  console.log("Setting code to: " + code);
  localStorage.setItem("code", code);
}
function App() {
  code = (localStorage.getItem("code"));
  return (

  <div className="app">
    <NavBar code={code}/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/create" element={<Create/>} />
    </Routes>
  </div>
  );
}

export default App;
