import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import Login from "./components/Login";
import Header from "./components/Header";
import Detail from './components/Detail';
import styled from 'styled-components';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          
          <Route exact path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/detail">
            <Route path=":id" element={<Detail />} />
          </Route>
          <Route path="*" element={<Error>404 Not Found!</Error>} />

        </Routes>
      </Router>
    </div>
  );
}

const Error = styled.h1`
  color: white;
  display: flex;
  align-items:center ;
  justify-content: center;
  margin-top:200px ;
`;

export default App;

