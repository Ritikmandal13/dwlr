// src/App.js
import React, { useState } from 'react';
import Header from './components/Header';
import NavigationBar from './components/NavigationBar'; // Correctly imported
import SearchBar from './components/SearchBar';
import DataDisplay from './components/DataDisplay';

const App = () => {
    const [devices, setDevices] = useState([]);
    
    // Example data for testing
    const exampleDevices = [
        { id: '1', depth: 10, temperature: 25, batteryVoltage: 3.7, status: 'Active' },
        { id: '2', depth: 12, temperature: 28, batteryVoltage: 3.6, status: 'Active' }
    ];

    const handleSearch = (query) => {
        const filteredDevices = exampleDevices.filter(device => device.id === query);
        setDevices(filteredDevices);
    };

    return (
        <div>
            <Header />
            <NavigationBar /> {/* Use NavigationBar here instead of NavBar */}
            <SearchBar onSearch={handleSearch} />
            <DataDisplay devices={devices} />
        </div>
    );
};

export default App; // Ensure this is a default export