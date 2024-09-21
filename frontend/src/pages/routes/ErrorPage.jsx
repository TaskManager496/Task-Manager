import React from "react";
import { Box, Typography, Avatar } from '@mui/material';

const ErrorPage = () => (
    <Box sx={{py: 1, display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", maxWidth: "lg", mx: "auto",}}
    >

        <Box display="flex" flexDirection="column" justifyContent="center">
            <Typography variant="h2">Oops!</Typography>
            <Typography variant="body1">Sorry, an unexpected error has occurred.</Typography>
        </Box>
    </Box>
);

export default ErrorPage;
