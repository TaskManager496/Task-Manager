import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

function Footer() {
    return (
        <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0 }}>
            <Toolbar>
                <Typography variant="body1" color="inherit" style={{ textAlign: 'center', width: '100%' }}>
                    © 2024 Task Manager
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default Footer;
