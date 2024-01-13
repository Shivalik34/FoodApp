// src/RestaurantList.js
import React, { useState } from 'react';

const RestaurantList = () => {
  const allRestaurants = [
    { id: 1, name: 'Cafe XYZ', cuisine: 'Italian', image: '/cafe-xyz.jpg' },
    { id: 2, name: 'Burger Joint', cuisine: 'American', image: '/burger-joint.jpg' },
    { id: 3, name: 'Sushi Bar', cuisine: 'Japanese', image: '/sushi-bar.jpg' },
    { id: 4, name: 'Spice Kingdom', cuisine: 'Indian', image: '/spice-kingdom.jpg' },
  ];

  const [filteredRestaurants, setFilteredRestaurants] = useState(allRestaurants);

  const filterByCuisine = (cuisine) => {
    const filtered = allRestaurants.filter(restaurant => restaurant.cuisine === cuisine);
    setFilteredRestaurants(filtered);
  };

  return (
    <div>
      <h2>Restaurant List</h2>
      <div>
        <button onClick={() => filterByCuisine('Italian')}>Italian</button>
        <button onClick={() => filterByCuisine('American')}>American</button>
        <button onClick={() => filterByCuisine('Japanese')}>Japanese</button>
        <button onClick={() => filterByCuisine('Indian')}>Indian</button>
        <button onClick={() => setFilteredRestaurants(allRestaurants)}>Show All</button>
      </div>
      <ul>
        {filteredRestaurants.map(restaurant => (
          <li key={restaurant.id}>
            <img src={`${restaurant.image}`} alt={restaurant.name} />
            <strong>{restaurant.name}</strong> 
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantList;
