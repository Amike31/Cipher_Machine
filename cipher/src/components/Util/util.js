import { useState } from 'react';
import {InputString, InputFormula, InputMatrix} from '../InputKey';

function GetInput(props) {
    const [text, setText] = useState('');
    function handleTextChange(event) {
        setText(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        alert(`Masukkan Text: ${text} ${inputKey.key}`);
    }

    let inputKey;
    if (props.type === "string") {
        inputKey = <InputString />
    }
    else if (props.type === "formula") {
        inputKey = <InputFormula />
    }
    else if (props.type === "matrix"){
        inputKey = <InputMatrix />
    }

    return (
        <div className="InputForm">    
            <form onSubmit={handleSubmit}>
                <div className='text'>Enter Your Text :</div>
                <textarea type="text" name='inputtext' value={text} onChange={handleTextChange} placeholder="Put Your Text Here..!" />
                <p>Input value: {text} </p>
                {inputKey}
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

function ShowResult(props) {
    let [result, setResult] = useState('');
    result = "";
    function handleResultChange(event) {
        setResult(event.target.value);
    }

    return(
        <div className="OutputForm">
            <div className='IOtext'>
                <div className='text'>Result :</div>
                <textarea type='text' name='outputtext' value={result} placeholder="The Result Will be Aappeared Here..!"></textarea>
            </div>
        </div>
    );
}

export { GetInput, ShowResult };