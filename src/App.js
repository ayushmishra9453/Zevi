
import './App.css';
import Home from './components/Home';
import About from './components/About';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';

function App() {
  return (
     <div className="App"> 
    <Router>
     <Routes>
        <Route path="/"  element={<Home />} />
        <Route path="/about" element={<About />}/>
        {/* <Route path="/contact" component={Contact} /> */}
    
    
     

    </Routes>
    </Router>
    </div> 
  );
}

export default App;
