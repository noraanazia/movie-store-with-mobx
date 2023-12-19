import { makeAutoObservable, reaction } from "mobx";
// The observer function from mobx-react is used to make the components reactive to MobX state changes. This means components will re-render whenever the observable data it uses changes.
// The use of makeAutoObservable simplifies making properties observable and methods as actions, and the reaction is used for persisting the state to local storage.
class MovieStore {
    movies = [];

    constructor() {
        makeAutoObservable(this);
		this.removeMovie = this.removeMovie.bind(this);
		this.loadMovies();

        // Save to local storage whenever movies change
        reaction(
            () => this.movies,
            movies => {
				console.log('Saving to local storage:', movies);
                localStorage.setItem('movies-mobx', JSON.stringify(movies));
            }
        );
    }
	getCurrentDate() {
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0');
        let yyyy = today.getFullYear();
        return `${dd}-${mm}-${yyyy}`;
    }

	loadMovies() {
        const savedMovies = localStorage.getItem('movies-mobx');
		console.log('Loading movies:', savedMovies);
        if (savedMovies) {
            this.movies = JSON.parse(savedMovies);
        }
    }

    addMovie(title, imageUrl, cost) {
		const releaseDate = this.getCurrentDate();
		console.log("Adding movie:", title);
		this.movies = [...this.movies, { title, imageUrl, releaseDate, cost, id: Date.now() }];
    }

    removeMovie(id) {
		console.log('movie removed', this.movies)
        this.movies = this.movies.filter(movie => movie.id !== id);
    }
}

export const movieStore = new MovieStore();
