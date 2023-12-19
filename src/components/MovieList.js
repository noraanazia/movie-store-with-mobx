import React, { useState } from 'react';
import { observer } from 'mobx-react';
import { movieStore } from '../../src/movieStore';
import Movie from './Movie';
import MovieModal from './MovieModal';
import './MovieList.css';

const MovieList = observer(() => {
    const [selectedMovie, setSelectedMovie] = useState(null);

    const handleMovieClick = (movie) => {
        setSelectedMovie(movie);
    };

    const handleCloseModal = () => {
        setSelectedMovie(null);
    };

    return (
        <div className="movie-list">
			{movieStore.movies.map(movie => (
                <div className="movie-item" key={movie.id}>
                <Movie movie={movie} onClick={handleMovieClick} onRemove={movieStore.removeMovie} />
				</div>
            ))}
            <MovieModal movie={selectedMovie} onClose={handleCloseModal} />
        </div>
    );
});

export default MovieList;
