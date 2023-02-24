import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Menu } from './pages/Menu';
import { Contact } from './pages/Contact';
import Navbar from './pages/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <div><Navbar/></div>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/menu" element={<Menu/>} />
          <Route path ="/contact" element={<Contact/>}/>
          <Route path ="*" element={<h1> This page does not exist</h1>}/> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;
