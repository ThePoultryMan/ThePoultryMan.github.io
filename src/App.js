import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { HashRouter as Router, Route, Routes} from 'react-router-dom';
// Pages
import Home from './pages/Home'
import Projects from './pages/Projects'
import Mods from './pages/Mods'
import BucketHat from './pages/projects/BucketHat'

function App() {
    return (
        <div className="App">
            <Router>
                <Navbar />
                <div className='Content'>
                    <Routes>
                        <Route path="/" exact element={<Home />}></Route>
                        <Route path="/projects" exact element={<Projects />}></Route>
                        <Route path="/mods" exact element={<Mods />}></Route>
                        <Route path='/projects/buckethat' exact element={<BucketHat />}></Route>
                    </Routes>
                </div>
            </Router>
        </div>
    );
}

export default App;
