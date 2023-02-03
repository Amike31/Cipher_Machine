// import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Affine from './Pages/Affine';
import Hill from './Pages/Hill';
import Playfair from './Pages/Playfair';
import Standard from './Pages/Vigenere_Standard';
import Extended from './Pages/Vigenere_Extended';
import AutoKey from './Pages/Vigenere_AutoKey';
import Home from './Pages/Home';

function App() {

  return (
    <div className="Alls">
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Vigenere-Standard" element={<Standard />} />
          <Route path="/Vigenere-AutoKey" element={<AutoKey />} />
          <Route path="/Vigenere-Extended" element={<Extended />} />
          <Route path="/Affine" element={<Affine />} />
          <Route path="/Playfair" element={<Playfair />} />
          <Route path="/Hill" element={<Hill />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;