import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./style.css";

import { WhatToWatch } from "../src/components/WhatToWatch";


const App = () => (
  <BrowserRouter>
    <React.Fragment>
      {/*<Header />*/}
      <Routes >
        <Route path="/" element={<WhatToWatch/>} exact />
        {/*<Route path="/:movieId" component={Movie} exact />*/}
        {/*<Route component={NotFound} />*/}
      </Routes>
    </React.Fragment>
  </BrowserRouter>
)

//function App() {
//  return (
//    <div className="body">
//      <WhatToWatch />
//    </div>
//  );
//}

export default App;
