import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

//import Home from '../src/Components/Home/Home';
import Movie from './Components/MainMovie/MainMovie';
import NotFound from './Components/NotFound/NotFound';
//import Test from './Components/Test/Test'

const App = () => (
  <BrowserRouter>
    <React.Fragment>
      {/*<Header />*/}
      <Routes >
        {/*<Route path="/" component={Home} exact />*/}
        <Route path="/:movieId" component={Movie} exact />
        <Route component={NotFound} />
      </Routes>
    </React.Fragment>
  </BrowserRouter>
)

export default App