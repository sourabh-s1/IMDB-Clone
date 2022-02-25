import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./style.css";

import { WhatToWatch } from "../src/components/WhatToWatch";
import { DetailedMovie } from "../src/components/DetailedMovie/DetailedMovie";

import {Navbar} from "../src/components/Layout/Navbar/Navbar";
import {Footer} from "../src/components/Layout/Footer/Footer";

const App = () => (
  <BrowserRouter>
    <React.Fragment>
    <Navbar/>
   
      <Routes>
        <Route path="/" element={<WhatToWatch />} exact />
        <Route path="/:movieId" element={<DetailedMovie />} exact />
        {/*<Route component={NotFound} />*/}
      </Routes>
      <Footer/>
    </React.Fragment>
  </BrowserRouter>
);

//function App() {
//  return (
//    <div className="body">
//      <WhatToWatch />
//    </div>
//  );
//}

export default App;
