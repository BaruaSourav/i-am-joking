import getJoke from './getJoke';
import './styles/main.scss';
import giggle from './assets/giggle.svg';

const giggleImage = document.getElementById('giggle-img');
giggleImage.src = giggle;

const getJokeButton = document.getElementById('jokeBtn');

getJokeButton.addEventListener('click', getJoke);

getJoke();

//console.log(getJoke());