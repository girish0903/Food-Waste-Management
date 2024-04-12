import React, { useState } from 'react';
import './Restaurant.css'

function Restaurant() {
  const [foodDetails, setFoodDetails] = useState({
    foodName: '',
    quantity: '',
    expirationDate: '',
    description: '',
    // Add more fields as needed
  });
  const [acknowledgment, setAcknowledgment] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFoodDetails({ ...foodDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit food details logic goes here
    console.log('Food details submitted:', foodDetails);
    // Show acknowledgment message
    setAcknowledgment(true);
    // Reset form fields
    setFoodDetails({
      foodName: '',
      quantity: '',
      expirationDate: '',
      description: '',
      // Reset other fields as needed
    });
  };

  return (
    <div>
      <h2>Restaurant Page</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Food Name:
          <input type="text" name="foodName" value={foodDetails.foodName} onChange={handleChange} />
        </label>
        <br />
        <label>
          Quantity:
          <input type="text" name="quantity" value={foodDetails.quantity} onChange={handleChange} />
        </label>
        <br />
        <label>
          Expiration Date:
          <input type="date" name="expirationDate" value={foodDetails.expirationDate} onChange={handleChange} />
        </label>
        <br />
        <label>
          Description:
          <textarea name="description" value={foodDetails.description} onChange={handleChange} />
        </label>
        <br />
        {/* Add more input fields as needed */}
        <button type="submit">Submit</button>
      </form>
      {acknowledgment && <p>Food details submitted successfully!</p>}
    </div>
  );
}

export default Restaurant;
