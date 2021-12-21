import { createTheme, ThemeProvider } from "@mui/material";
import { dark } from "@mui/material/styles/createPalette";
import { useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Addpaper from "./components/addpaper";
import Header from "./components/header";
import Home from "./components/home";
import AboutUs from "./components/about";
import Course from "./components/course";
import Login from "./components/login";
import SignUp from "./components/signup";
import { ProdductProvider } from "./productContext";
import Dashboard from "./components/dashboard";
import Branch from "./components/branch";
import SolvePaper from "./components/solvepaper";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const lightTheme = createTheme({
    palette: {
      mode: "light",
      primary: {
        main: "#e6244ed7",
        dark: "red",
      },
    },
  });
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      background: {
        paper: "#1c113a",
      },
    },
  });

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <ProdductProvider>
        <BrowserRouter>
          <Header darkMode={darkMode} setDarkMode={setDarkMode}></Header>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/addpaper" element={<Addpaper />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/Course" element={<Course />} />
            <Route path="/Branch" element={<Branch />} />

            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/" element={<Navigate replace to="/home" />} />
            <Route component={<SolvePaper />} path={"/solve/:id"}></Route>
          </Routes>
        </BrowserRouter>
      </ProdductProvider>
    </ThemeProvider>
  );
}

export default App;
