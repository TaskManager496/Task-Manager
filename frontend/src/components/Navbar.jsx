import React from 'react';
import { AppBar, Toolbar, Typography,Button } from '@mui/material';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <AppBar position="sticky">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    UHT LOGO
                </Typography>
                <Button color="inherit" component={Link} to="/">Home</Button>
                <Button color="inherit" component={Link} to="/about">About</Button>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;
