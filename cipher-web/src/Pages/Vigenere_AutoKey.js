import { useState } from 'react';
import { InputString } from '../components/Form';

function AutoKey() {
  const [resultP, setResultP] = useState('');
  const [resultC, setResultC] = useState('');
  const title1 = `<<-  Encryption  ->>`;
  const title2 = `<<-  Decryption  ->>`;
  
  return (
    <div className="App">
      <h1>AUTO-KEY VIGENERE CIPHER</h1>
      <InputString children="ENCRYPT"
        result={resultP}
        endpoint="autoVigenere/encode"
        setResult={setResultP}
        title={title1}/>
      <br />
      <InputString children="DECRYPT"
        result={resultC}
        endpoint="autoVigenere/decode"
        setResult={setResultC} 
        title={title2}/>
    </div>
  );
}

export default AutoKey;