import { useState } from 'react';
import { InputFormula } from '../components/Form';

function Playfair() {
  const [textP, setTextP] = useState('');
  const [fomulaP, setFormulaP] = useState({formula1:null, formula2:null});
  const [resultP, setResultP] = useState('');

  function handleComputeP(text,formula) {
    setTextP(text);
    setFormulaP((formula.formula1)+`x +`+(formula.formula2));
    setResultP(textP+` `+fomulaP);
  }
  
  const [textC, setTextC] = useState('');
  const [formulaC, setFormulaC] = useState({formula1:null, formula2:null});
  const [resultC, setResultC] = useState('');

  function handleComputeC(text,formula) {
    setTextC(text);
    setFormulaC(formula.formula1+`x + `+formula.formula2);
    setResultC(textC+` `+formulaC);
  }

  return (
    <div className="App">
      <div className='encryptPart'>
        <h1>Encrypt Your Plaintext</h1>
        <InputFormula handleCompute={handleComputeP} result={resultP} />
      </div>
      <br />
      <div className='decryptPart'>
        <h1>Decrypt Your Ciphertext</h1>
        <InputFormula handleCompute={handleComputeC} result={resultC} />
      </div>
    </div>
  );
}

export default Playfair;