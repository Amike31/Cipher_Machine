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
  // var name = 'Hill';
  // var inputType;
  // if (name==='Hill') {
  //   inputType = 'matrix';
  // }
  // else if (name==='Affine') {
  //   inputType = 'formula';
  // }
  // else {
  //   inputType = 'string';
  // }
    
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
      {/* <div className='encryptPart'>
        <h1>Encrypt Your Plaintext</h1>
        <GetInput type={inputType}/>
        <ShowResult />
      </div>
      <br />
      <div className='decryptPart'>
        <h1>Decrypt Your Ciphertext</h1>
        <GetInput type={inputType}/>
        <ShowResult />
      </div> */}
    </div>
  );
}

export default App;