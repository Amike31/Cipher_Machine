// import { useState } from 'react';
// import '../App.css';
import { GetInput, ShowResult } from '../Util/util';

function Standard() {
  
  return (
    <div className="App">
      <div className='encryptPart'>
        <h1>Encrypt Your Plaintext</h1>
        <GetInput type='string'/>
        <ShowResult />
      </div>
      <br />
      <div className='decryptPart'>
        <h1>Decrypt Your Ciphertext</h1>
        <GetInput type='string'/>
        <ShowResult />
      </div>
    </div>
  );
}

export default Standard;