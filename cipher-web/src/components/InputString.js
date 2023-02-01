import React from 'react';

function InputString({kunci, setKunci}){
    function handleTextChange(event) {
        setKunci(event.target.value);
    }
    return <textarea onChange={handleTextChange} value={kunci} rows={10} placeholder="Key Can be A String..!" ></textarea>
}

export default InputString;