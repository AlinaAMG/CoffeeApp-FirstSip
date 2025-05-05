import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Favorites.css';
import { FaRegHeart} from 'react-icons/fa';


function FavoritesPage() {
  const [favorites, setFavorites] = useState([]);

  // Fetch the saved favorites from localStorage
  useEffect(() => {
    const fetchFavorites = () => {
      const savedFavorites =
        JSON.parse(localStorage.getItem('favorites')) || [];
      console.log('Loaded favorites from localStorage:', savedFavorites);
      setFavorites(savedFavorites);
    };

    fetchFavorites();

    window.addEventListener('favoritesUpdated', fetchFavorites);

    return () => {
      window.removeEventListener('favoritesUpdated', fetchFavorites);
    };
  }, []);

  // Remove a coffee from favorites
  const handleRemoveFavorite = (_id) => { // Use _id here
    const updatedFavorites = favorites.filter(
      (coffee) => coffee._id !== _id // Filter by _id
    );
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites)); // Update localStorage too

    // Dispatch an event to notify other components of the favorites update
    window.dispatchEvent(new Event('favoritesUpdated'));
  };

  return (
    <div className="favorites-page">
      <h2>Coffee favorites list</h2>

      {/* Displaying the list of favorite coffees */}
      {favorites.length > 0 ? (
        <div className="favorites-grid">
          {favorites.map((coffee) => (
            <div key={coffee._id} className="favorite-card"> {/* Use _id here */}
              <img
                src={coffee.imageUrl}
                alt={coffee.name}
                className="favorite-card-image"
              />
              <div className="favorite-card-body">
                <h3 className="favorite-card-title">{coffee.name}</h3>
                <p className="favorite-card-description">
                  {coffee.description}
                </p>
                <p>
                  <strong>Price:</strong> €{coffee.price}
                </p>
                <Link to={`/shop/${coffee._id}`} className="favorite-card-link"> {/* Use _id here */}
                  View Details
                </Link>

                <button
                  className="remove-favorite-button"
                  onClick={() => handleRemoveFavorite(coffee._id)}
                >
                  Remove from Favorites
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="empty-favorites">
          <FaRegHeart style={{ fontSize: '6rem', color: '#ccc' }} />
          <p className="no-coffees">No favorites yet. Add some to your list!</p>
        </div>
      )}
    </div>
  );
}

export default FavoritesPage;

