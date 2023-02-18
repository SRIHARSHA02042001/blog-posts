import UserContext from "./componenets/UserContext";
import Login from "./componenets/Login";
import Home from "./componenets/Home";
import {BrowserRouter as Router, Routes,Route} from "react-router-dom";
import { useState } from "react";
import './App.css';
function App() {
  const [userId,setUserId]=useState("");
  const [userPassword,setUserPassword]=useState("");
  const [isLoggedIn,setIsLoggedIn]=useState(false);
  return (
    <Router>
      <UserContext.Provider value={{userId,setUserId,userPassword,setUserPassword,isLoggedIn,setIsLoggedIn}}>
        <Routes>
          <Route exact path="/" element={<Login/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="*" element={<h1>No Page Found</h1>}/>
        </Routes>
      </UserContext.Provider>
      </Router>
  );
}

export default App;
