const addBtn = document.querySelector('#addMovieBtn');
const main = document.querySelector('.main');
const addedMovie = document.createElement('div');

const myLibrary = [];

function Movie(title, director, runtime, watched) {
    this.title = title
    this.director = director
    this.runtime = runtime
    this.watched = watched
}
//displayMovie() should add the title, director, runtime, and watched parameters to a div that has 4 sections.//
//forEach loop?//
function displayMovie() {

}

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
