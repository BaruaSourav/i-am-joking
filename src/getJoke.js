import axios from 'axios';

function getJoke() {
    const config = {
        headers : {
            Accept : 'application/json'
        }
    };
    // getting programming jokes
    axios.get('https://v2.jokeapi.dev/joke/Programming?type=single',config).then (result => {
        document.getElementById('joke').innerHTML = result.data.joke;
    });
}

export default getJoke;