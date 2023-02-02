import { useState } from 'react';
import { InputMatrix } from '../components/Form';

function Hill() {
  const [resultP, setResultP] = useState('');
  const [resultC, setResultC] = useState('');
  const title1 = `<<-  Encryption  ->>`;
  const title2 = `<<-  Decryption  ->>`;
  
  return (
    <div className="App">
      <h1>HILL CIPHER</h1>
      <InputMatrix children="ENCRYPT"
        result={resultP}
        endpoint="hill/encode"
        setResult={setResultP} 
        title={title1}/>
      <br />
      <InputMatrix children="DECRYPT"
        result={resultC}
        endpoint="hill/decode"
        setResult={setResultC}
        title={title2} />
    </div>
  );
}

export default Hill;