import { useState } from 'react';
import { InputMatrix } from '../components/Form';

function Hill() {
  const [textP, setTextP] = useState('');
  const [elP, setElP] = useState({el1:null, el2:null, el3:null,
                                  el4:null, el5:null, el6:null,
                                  el7:null, el8:null, el9:null});
  const [resultP, setResultP] = useState('');

  function handleComputeP(text,el) {
    setTextP(text);
    setElP((el.el1)+(el.el2));
    setResultP(textP+` `+elP);
  }
  
  const [textC, setTextC] = useState('');
  const [elC, setElC] = useState({el1:null, el2:null, el3:null,
                                  el4:null, el5:null, el6:null,
                                  el7:null, el8:null, el9:null});
  const [resultC, setResultC] = useState('');

  function handleComputeC(text,el) {
    setTextC(text);
    setElC(el.el1+el.el2);
    setResultC(textC+` `+elC);
  }

  return (
    <div className="App">
      <div className='encryptPart'>
        <h1>Encrypt Your Plaintext</h1>
        <InputMatrix handleCompute={handleComputeP} result={resultP} />
      </div>
      <br />
      <div className='decryptPart'>
        <h1>Decrypt Your Ciphertext</h1>
        <InputMatrix handleCompute={handleComputeC} result={resultC} />
      </div>
    </div>
  );
}

export default Hill;