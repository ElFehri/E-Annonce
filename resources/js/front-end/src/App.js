import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState, useContext } from "react";
import PublicationsList from './components/publications/PublicationsList';
import CreatePublication from './components/publications/CreatePublication';
import EditPublication from './components/publications/EditPublication';


//style
import './App.css';
import Header from "./components/parts/Header";
import Sidebar from "./components/parts/Sidebar";
import Login from "./components/parts/Login";
import HomeComponent from "./components/HomeComponent";
import SingUp from "./components/parts/SingUp";
import Welcome from "./components/welcome";

function App() {
 
  
  return (
    <Router>

          <Routes>
            <Route path="/" element={<Welcome/>}></Route>
            <Route path="/home" element={<HomeComponent/>}></Route>
            <Route path="/publications" element={<PublicationsList/>}></Route>
            <Route path="/publications/create" element={<CreatePublication/>}></Route>
            <Route path="/publications/:id/edit" element={<EditPublication/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/singup" element={<SingUp/>}></Route>
          </Routes>
      
      
      
    </Router>
  );
}

export default App;
