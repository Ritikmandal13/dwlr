// src/components/NavigationBar.js
import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const NavigationBar = () => (
    <AppBar position="static">
        <Toolbar>
            <Typography variant="h6" style={{ flexGrow: 1 }}>
                CGWB DWLR Dashboard
            </Typography>
            <Button color="inherit" component={Link} to="/">Dashboard</Button>
            <Button color="inherit" component={Link} to="/anomalies">Anomalies</Button>
            <Button color="inherit" component={Link} to="/notifications">Notifications</Button>
        </Toolbar>
    </AppBar>
);

export default NavigationBar;
