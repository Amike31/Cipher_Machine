// import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Affine from './components/Pages/Affine';
import Hill from './components/Pages/Hill';
import Playfair from './components/Pages/Playfair';
import Standard from './components/Pages/Vigenere_Standard';
import Extended from './components/Pages/Vigenere_Extended';
import AutoKey from './components/Pages/Vigenere_AutoKey';

function App() {

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Routes>
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