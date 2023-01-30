import React, { useState } from 'react';
import './InputKey.css';

function InputString(props) {
  const [key, setKey] = useState('masukkan kunci anda');
  function handleKeyChange(event) {
    setKey(event.target.value);
  }

  return (
    <div className='Key'> 
      <div className='text'>Enter Your Key :</div>
      <input type="text" value={key} onChange={handleKeyChange} />
      <p>Input value: {key}</p>
    </div>
  );
}

function InputFormula(props) {
  const [formula1, setFormula1] = useState(3);
  const [formula2, setFormula2] = useState(1);
  
  function handleFormula1Change(event){
    setFormula1(event.target.value);
  }
  function handleFormula2Change(event){
    setFormula2(event.target.value);
  }
  let mid = ` X + `;

  return (
    <div className='Key'> 
      <label>
          Enter Your Key Formula:
          <input type="text" value={formula1} onChange={handleFormula1Change} />
          {mid}
          <input type="text" value={formula2} onChange={handleFormula2Change} />
      </label>
      <p>Input value: {formula1}X + {formula2}</p>
    </div>
  );
}

function InputMatrix(props) {
  const [el1, setEl1] = useState(17);
  const [el2, setEl2] = useState(17);
  const [el3, setEl3] = useState(5);
  const [el4, setEl4] = useState(21);
  const [el5, setEl5] = useState(18);
  const [el6, setEl6] = useState(21);
  const [el7, setEl7] = useState(2);
  const [el8, setEl8] = useState(19);
  const [el9, setEl9] = useState(2);

  function handleEl1Change(event) {setEl1(event.target.value);}
  function handleEl2Change(event) {setEl2(event.target.value);}
  function handleEl3Change(event) {setEl3(event.target.value);}
  function handleEl4Change(event) {setEl4(event.target.value);}
  function handleEl5Change(event) {setEl5(event.target.value);}
  function handleEl6Change(event) {setEl6(event.target.value);}
  function handleEl7Change(event) {setEl7(event.target.value);}
  function handleEl8Change(event) {setEl8(event.target.value);}
  function handleEl9Change(event) {setEl9(event.target.value);}

  return (
    <div className='Key'> 
      <div className='text'> Enter Your Matrix :</div>
      <div className='matrixRow'>
        <input type="text" value={el1} onChange={handleEl1Change} />
        <input type="text" value={el2} onChange={handleEl2Change} />
        <input type="text" value={el3} onChange={handleEl3Change} />
      </div>
      <div className='matrixRow'>
        <input type="text" value={el4} onChange={handleEl4Change} />
        <input type="text" value={el5} onChange={handleEl5Change} />
        <input type="text" value={el6} onChange={handleEl6Change} />
      </div>
      <div className='matrixRow'>
        <input type="text" value={el7} onChange={handleEl7Change} />
        <input type="text" value={el8} onChange={handleEl8Change} />
        <input type="text" value={el9} onChange={handleEl9Change} />
      </div>
      <p>Input Matrix:</p>
      <p>{el1} {el2} {el3}</p>
      <p>{el4} {el5} {el6}</p>
      <p>{el7} {el8} {el9}</p>
    </div>
  );

}
export {InputString, InputFormula, InputMatrix};