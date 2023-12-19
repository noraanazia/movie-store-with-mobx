import React from 'react';

const Movie = ({ movie, onClick, onRemove }) => {
	const handleRemove = (e) => {
        e.stopPropagation();
        onRemove(movie.id);
    };
	
    return (
        // <div onClick={() => onClick(movie)} style={{ boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)' }}>
        <div onClick={() => onClick(movie)} className='movie-item'>
            <img src={movie.imageUrl} alt={movie.title} />
            <h3>{movie.title}</h3>
			<button className='remove-button' onClick={handleRemove}>Remove Food</button>
        </div>
    );
};

export default Movie;

