// src/components/DataDisplay.js
import React from 'react';

const DataDisplay = ({ devices }) => {
    return (
        <div>
            {devices.length > 0 ? (
                devices.map((device) => (
                    <div key={device.id}>
                        <h2>Device ID: {device.id}</h2>
                        <p>Depth: {device.depth}m</p>
                        <p>Temperature: {device.temperature}°C</p>
                        <p>Battery Voltage: {device.batteryVoltage}V</p>
                        <p>Status: {device.status}</p>
                    </div>
                ))
            ) : (
                <p>No devices found.</p>
            )}
        </div>
    );
};

export default DataDisplay; // Ensure this is a default export
