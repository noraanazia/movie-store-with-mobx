import React from 'react';
import './MovieModal.css';

const MovieModal = ({ movie, onClose }) => {
    if (!movie) return null;

    return (
        <div className="modal-backdrop">
            <div className="modal">
                <h2>{movie.title}</h2>
                <p>Release Date: {movie.releaseDate}</p>
                <p>Cost to Create: ${movie.cost}</p>
                <button onClick={onClose} className='close-button'>Close</button>
            </div>
        </div>
    );
};

export default MovieModal;