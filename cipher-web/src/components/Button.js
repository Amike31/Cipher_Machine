import axios from 'axios';
// var config = { headers: {  
//     'Content-Type': 'application/json',
//     'Access-Control-Allow-Origin': 'http://localhost:5000/*',}}

function Button({children, endpoint, text, kunci, setResult}) {
    console.log(text);
    console.log(kunci)
    function handleSubmit() {
        axios.post(endpoint, {text, key:kunci})
            .then((response) => setResult(response.data.result))
    }

    return <button onClick={handleSubmit}>{children}</button>
}

export default Button;