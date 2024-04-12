import React, { useState } from 'react';
import './Ngo.css'

function NGO() {
  // Sample data for restaurants and available food
  const [restaurants] = useState([
    { 
      id: 1, 
      name: 'Restaurant A', 
      address: '123 Main St, City', 
      contact: '123-456-7890', 
      food: [
        { name: 'Pizza', quantity: '5 slices' },
        { name: 'Burger', quantity: '10 pieces' },
        { name: 'Salad', quantity: '3 bowls' }
      ]
    },
    { 
      id: 2, 
      name: 'Restaurant B', 
      address: '456 Elm St, Town', 
      contact: '987-654-3210', 
      food: [
        { name: 'Sushi', quantity: '8 rolls' },
        { name: 'Pasta', quantity: '2 plates' },
        { name: 'Sandwich', quantity: '6 sandwiches' }
      ]
    },
    { 
      id: 3, 
      name: 'Restaurant C', 
      address: '789 Oak St, Village', 
      contact: '456-789-0123', 
      food: [
        { name: 'Steak', quantity: '2 steaks' },
        { name: 'Soup', quantity: '1 pot' },
        { name: 'Rice', quantity: '5 servings' }
      ]
    },
    // Add more sample data as needed
  ]);
  const [acknowledgment, setAcknowledgment] = useState(false);
  const [bookedRestaurant, setBookedRestaurant] = useState(null);

  const handleBook = (restaurant) => {
    // Add logic to book the meal from the restaurant
    console.log(`Meal booked from ${restaurant.name}`);
    setBookedRestaurant(restaurant);
    setAcknowledgment(true);
  };

  return (
    <div>
      <h2>NGO Page</h2>
      <h3>Available Food from Restaurants</h3>
      <table>
        <thead>
          <tr>
            <th>Restaurant</th>
            <th>Address</th>
            <th>Contact</th>
            <th>Food</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {restaurants.map((restaurant) => (
            <tr key={restaurant.id}>
              <td>{restaurant.name}</td>
              <td>{restaurant.address}</td>
              <td>{restaurant.contact}</td>
              <td>
                <ul>
                  {restaurant.food.map((item, index) => (
                    <li key={index}>{item.name} - {item.quantity}</li>
                  ))}
                </ul>
              </td>
              <td>
                <button onClick={() => handleBook(restaurant)}>Book</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {acknowledgment && (
        <p>{bookedRestaurant ? `Meal booked from ${bookedRestaurant.name}` : 'Meal booked successfully!'}</p>
      )}
    </div>
  );
}

export default NGO;
