import React from "react";
import { Box, Typography, Avatar } from '@mui/material';

const About = () => (
    <Box  sx={{py: 1, display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", maxWidth: "lg", mx: "auto",}}
    >

        <Box display="flex" flexDirection="column" justifyContent="center">
            <Typography variant="h2">About us page</Typography>
            <Typography variant="body1">Section is under development, please check back later.</Typography>
        </Box>
    </Box>
);

export default About;
