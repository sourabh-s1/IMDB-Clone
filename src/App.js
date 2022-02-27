import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./style.css";
import {auth} from './components/SignIn/firebase';
import {setUser} from './components/SignIn/redux/actions';
import {useDispatch} from 'react-redux';
import {useEffect} from "react";

import { WhatToWatch } from "../src/components/WhatToWatch";
import { DetailedMovie } from "../src/components/DetailedMovie/DetailedMovie";

import {Navbar} from "../src/components/Layout/Navbar/Navbar";
import {Footer} from "../src/components/Layout/Footer/Footer";

import Login from "./components/SignIn/pages/Login";
import Register from "./components/SignIn/pages/Register";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
auth.onAuthStateChanged((authUser) =>{
  if(authUser){
    dispatch(setUser(authUser));
  }else{
    dispatch(setUser(null));
  }
});
  }, [dispatch]);

  return (
    <BrowserRouter>
    <React.Fragment>
    <Navbar/>

      <Routes>
        <Route path="/" element={<WhatToWatch /> } exact />
        <Route path="/:movieId" element={<DetailedMovie />} exact />
        <Route path="/login" element={<Login/> } exact />
        <Route path="/register" element={<Register/>}/>
        {/*<Route component={NotFound} />*/}
      </Routes>
      <Footer/>
    </React.Fragment>
  </BrowserRouter>
  )
  };

//function App() {
//  return (
//    <div className="body">
//      <WhatToWatch />
//    </div>
//  );
//}

export default App;
