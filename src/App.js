import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <Router>
          <Routes >
            <Route index element={<Home />} />
            <Route path="/login" element={<Login />} />
            {/* <Route path="/detail/:id" element={<Detail />} />*/}
          </Routes >
      </Router>
    </div>
  );
}

export default App;

