import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Restaurant from './components/Restaurant';
import NGOLogin from './components/NGOLogin'; // Import NGOLogin component
import NGO from './components/Ngo';
import RestaurantLogin from './components/RestaurantLogin'; // Import RestaurantLogin component
import Analytics from './components/Analytics';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/restaurant" element={<Restaurant />} />
          <Route path="/restaurant/login" element={<RestaurantLogin />} /> // Route for Restaurant Login
          <Route path="/ngo" element={<NGO />} />
          <Route path="/ngo/login" element={<NGOLogin />} /> // Route for NGO Login
          <Route path="/analytics" element={<Analytics />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
