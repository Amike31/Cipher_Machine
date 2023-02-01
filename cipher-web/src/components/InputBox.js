import React from 'react';

function InputBox({text, setText}){
    function handleTextChange(event) {
        setText(event.target.value);
    }
    return <textarea onChange={handleTextChange} value={text} rows={10} placeholder="Enter Your Text Here..!"></textarea>
}

export default InputBox;