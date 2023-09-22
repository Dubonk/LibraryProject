const main = document.querySelector('.main');
const movieBtn = document.querySelector('#addMovieBtn');
const movieForm = document.querySelector('#movieInfo');
const submitMovie = document.querySelector('#submitInfo');
const movieCard = document.querySelector('.movieCards');
let title; // = document.querySelector('#movieTitle').value;
let director; // = document.querySelector('#movieDirector').value;
let runtime; // = document.querySelector('#movieRuntime').value;
let watched; // = document.querySelector('#watched-checkbox').value;
const myLibrary = [];
movieForm.style.display = 'none';

function Movie(title, director, runtime, watched) {
    this.title = title
    this.director = director
    this.runtime = runtime
    this.watched = watched
}

submitMovie.addEventListener('click', (e) => {
    e.preventDefault();
    title = document.querySelector('#movieTitle').value;
    director = document.querySelector('#movieDirector').value;
    runtime = document.querySelector('#movieRuntime').value;
    watched = document.querySelector('#watched-checkbox').value;
    addMovieToLibrary();
    movieForm.reset();
});

//displayMovie() should add the title, director, runtime, and watched parameters to a div that has 4 sections.//
//forEach loop?//
function displayMovie() {
for(let i = 0; i < myLibrary.length; i++) {
        console.log(myLibrary);
}}

//styleCards() should toggle class name to the div//
function styleCards() {
   
}

function addMovieToLibrary() {
    let newMovie = new Movie(title, director, runtime, watched);
    myLibrary.push(newMovie);
    displayMovie()
    styleCards()
}

//If movie is watched, make background color green, if movie has not been watched, leave alone?//
//Create a form that takes all 4 parameters but make it hidden until button is pressed?//



function showForm() {
       movieForm.style.display = movieForm.style.display === 'none' ? 'flex' : 'none'; 
       if(movieForm.style.display === 'none') {
        movieBtn.textContent = '+'
       }
       else if (movieForm.style.display === 'flex') {
        movieBtn.textContent = 'X'
    }
    }

movieBtn.addEventListener('click', () => {
    showForm();
});

//Hello World!//