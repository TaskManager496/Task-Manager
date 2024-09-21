import React from "react";
import './App.css';
import Navbar from "./components/Navbar";
import Footer from './components/Footer';
import About from "./pages/Home/About";
import Landing from "./pages/Home/Landing";
import ContactUs from "./pages/Home/ContactUs";
import EditTask from "./pages/Home/EditTask";
import SignUp from "./pages/Home/SignUp";
import SignIn from "./pages/Home/SignIn";
import UserPage from "./pages/Home/UserPage";
import ViewTask from "./pages/Home/ViewTask";
import ErrorPage from "./pages/routes/ErrorPage";
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
                <Route path='/' element={<Landing />} />
                <Route path='about' element={<About />} />
            </Routes>
            <Footer />
            </div>
        </Router>
      </ThemeProvider>

  );
}



export default App;
