import React, { useState } from 'react';
import { movieStore } from '../movieStore';
import './AddMovie.css';

const AddMovie = () => {
    const [title, setTitle] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [cost, setCost] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
		movieStore.addMovie(title, imageUrl, cost);
        setTitle('');
        setImageUrl('');
        setCost('');
    };

    return (
        <div className="add-movie-container">
            <h2>Sample Food App with Mobx</h2>
            <form onSubmit={handleSubmit} className="add-movie-form">
			<div className="input-group">
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Food title" className="input-field" />
                <input type="text" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} placeholder="Image URL" className="input-field" />
			</div>
			<div className="input-group">
                <input type="text" value={cost} onChange={(e) => setCost(e.target.value)} placeholder="Production Cost" className="input-field" />
            </div>
				<button type="submit" className="submit-button">Add Food</button>
            </form>
        </div>
    );
};

export default AddMovie;
