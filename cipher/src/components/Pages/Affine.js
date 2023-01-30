// import { useState } from 'react';
// import './App.css';
import { GetInput, ShowResult } from '../Util/util';

function Affine() {
  return (  
    <div className="App">
      <div className='encryptPart'>
        <h1>Encrypt Your Plaintext</h1>
        <GetInput type='formula'/>
        <ShowResult />
      </div>
      <br />
      <div className='decryptPart'>
        <h1>Decrypt Your Ciphertext</h1>
        <GetInput type='formula'/>
        <ShowResult />
      </div>
    </div>
  );
}

export default Affine;