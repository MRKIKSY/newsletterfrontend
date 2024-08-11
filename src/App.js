import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import SubscriberList from './components/SubscriberList';
import Home from './components/Home'; // Assuming you have a Home component
import SubscriptionForm from './components/SubscriptionForm';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/subscribers" element={<SubscriberList />} />
        <Route path="/subscribe" element={<SubscriptionForm />} />
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
};

export default App;
