import React from "react";
import './App.css';
import Navbar from "./components/Navbar";
import Footer from './components/Footer';
import Home from "./pages/Home";
import About from "./pages/About";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles'; // Import theme modules

const theme = createTheme({
    palette: {
        primary: {
            // ‘Ulu Green
            main: '#5C9B31',
        },
        secondary: {
            // Heritage Gold
            main: '#ECA700',
        },
    },
    typography: {
        fontFamily: 'Avenir Next',
        h1: {
            fontFamily: 'Avenir Next Bold',
        },
        body1: {
            fontFamily: 'Avenir Next',
        },
    },
});

function App() {
  return (
      <ThemeProvider theme={theme}>
      <Router>
            <div className="d-flex flex-column min-vh-100">
     <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='about' element={<About />} />
            </Routes>
            <Footer />
            </div>
        </Router>
      </ThemeProvider>

  );
}

export default App;
