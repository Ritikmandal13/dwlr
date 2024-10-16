// src/components/Dashboard.js
import React from 'react';
import { Container, Typography, Grid, Paper } from '@mui/material';
import DataChart from './DataChart'; // Create a chart component for visualizing trends

const Dashboard = () => (
    <Container>
        <Typography variant="h4" gutterBottom>Dashboard Overview</Typography>
        <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
                <Paper elevation={3} style={{ padding: '20px' }}>
                    <Typography variant="h6">Total Devices</Typography>
                    <Typography variant="h3">14,000</Typography>
                </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
                <Paper elevation={3} style={{ padding: '20px' }}>
                    <Typography variant="h6">Active Anomalies</Typography>
                    <Typography variant="h3">230</Typography>
                </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
                <Paper elevation={3} style={{ padding: '20px' }}>
                    <Typography variant="h6">Offline Devices</Typography>
                    <Typography variant="h3">120</Typography>
                </Paper>
            </Grid>
        </Grid>
        <DataChart />
    </Container>
);

export default Dashboard;
