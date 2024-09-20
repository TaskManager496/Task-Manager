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
            main: '#5C9B31',
        },
        secondary: {
            main: '#ECA700',
        },
    },
});

function App() {
  return (
      <ThemeProvider theme={theme}>
      <Router>
            <div>
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
