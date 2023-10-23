const main = document.querySelector('.main');
const movieBtn = document.querySelector('#addMovieBtn');
const movieForm = document.querySelector('#movieInfo');
const submitMovie = document.querySelector('#submitInfo');
let movieCard;
let mName;
let mDir;
let mTime;
let title;
let director;
let runtime;
let watched;
const myLibrary = [];
movieForm.style.display = 'none';

function Movie(title, director, runtime, watched) {
    this.title = title
    this.director = director
    this.runtime = runtime
    this.watched = watched
    this.movieId = `movie${++Movie.id}`;
}

Movie.id = 0;


submitMovie.addEventListener('click', (e) => {
    e.preventDefault();
    title = document.querySelector('#movieTitle').value;
    director = document.querySelector('#movieDirector').value;
    runtime = document.querySelector('#movieRuntime').value;
    watched = document.querySelector('#toggle-34').value;
    if (title.trim() === '') {
        // Check if any of the required fields are empty
        alert('Please fill in all required fields.');
    } else {
        addMovieToLibrary();
        movieForm.reset();
    }
});

function updateMovieIds() {
    myLibrary.forEach((movie, index) => {
        movie.movieId = `movie${index + 1}`;
    });
    Movie.id = myLibrary.length;
}

function updateMovieIdsInLibrary() {
    for (let i = 0; i < myLibrary.length; i++) {
        myLibrary[i].movieId = `movie${i + 1}`;
    }
}

function remMovie(buttonElement) {
    updateMovieIdsInLibrary();
    const movieId = buttonElement.parentElement.getAttribute('data-movie-id');
    const findMovieIndex = myLibrary.findIndex(
        (element) => element.movieId === movieId
    );

    if (findMovieIndex !== -1) {
        myLibrary.splice(findMovieIndex, 1);
        buttonElement.parentElement.remove();
    }
}

//displayMovie() should add the title, director, runtime, and watched parameters to a div that has 4 sections.//
//forEach loop?//
function displayMovie() {
myLibrary.forEach((movie) => {
    movieCard = document.createElement('div');
    movieCard.classList.add(`${movie.movieId}`);
    movieCard.setAttribute('data-movie-id', movie.movieId);
    mName = document.createElement('div');
    mDir = document.createElement('div');
    mTime = document.createElement('div');
    watched = document.querySelector('#toggle-34');
    mName.innerText = title.toUpperCase();
    mDir.innerText = director;
    mTime.textContent = runtime;
});
    if(mName.innerText !== "") {
        if(watched.checked == true) {
            movieCard.classList.toggle('greenBG');
        }
    movieCard.appendChild(mName);
    movieCard.appendChild(mDir);
    movieCard.appendChild(mTime);
    let btn2 = document.createElement('button');
    btn2.appendChild(document.createTextNode('Watched?'));
    let btn = document.createElement('button');
    btn.appendChild(document.createTextNode("Remove movie"));
    main.appendChild(movieCard);
    movieCard.appendChild(btn2);
    movieCard.appendChild(btn);
        btn2.addEventListener('click', (event) => {
            event.target.parentElement.classList.toggle("greenBG"); 
        });

    btn.addEventListener('click', (event) => {
        event.target.parentElement.remove();
        remMovie(event.target);
    });
};
}

//styleCards() should toggle class name to the div//
function styleCards() {
    mName.classList.add("movieTitle");
    mDir.classList.add("director");
    mTime.classList.add("runtime");
    movieCard.classList.add("movieCards");

}


function addMovieToLibrary() {
    let newMovie = new Movie(title, director, runtime, watched);
    myLibrary.push(newMovie);
    updateMovieIds(newMovie);
    displayMovie();
    styleCards();
}

function showForm() {
       movieForm.style.display = movieForm.style.display === 'none' ? 'flex' : 'none'; 
       if(movieForm.style.display === 'none') {
        movieBtn.textContent = '+'
        movieBtn.style.color = 'rgb(5, 107, 5)';
       }
       else if (movieForm.style.display === 'flex') {
        movieBtn.textContent = 'x';
        movieBtn.style.color = 'rgb(163, 39, 39)';
    }
    }

movieBtn.addEventListener('click', () => {
    showForm();
});
