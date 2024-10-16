// src/components/DataChart.js
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const sampleData = [
    { time: '2024-10-01', waterLevel: 5.2, battery: 3.9 },
    { time: '2024-10-02', waterLevel: 5.1, battery: 3.7 },
    { time: '2024-10-03', waterLevel: 5.3, battery: 3.6 },
    { time: '2024-10-04', waterLevel: 5.0, battery: 3.8 },
    { time: '2024-10-05', waterLevel: 5.4, battery: 3.5 }
];

const DataChart = () => (
    <ResponsiveContainer width="100%" height={400}>
        <LineChart data={sampleData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="waterLevel" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="battery" stroke="#82ca9d" />
        </LineChart>
    </ResponsiveContainer>
);

export default DataChart;
