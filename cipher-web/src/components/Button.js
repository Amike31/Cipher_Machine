import axios from 'axios';

function Button({children, endpoint, text, kunci, setResult}) {
    function handleSubmit() {
        axios.post(endpoint, {text, key:kunci})
            .then((response) => {setResult(response.data.result);console.log(response.data.result)})
    }

    return (
        <div className='submit-btn' >
            <button onClick={handleSubmit}>{children}</button>
        </div>
    )
}

export default Button;