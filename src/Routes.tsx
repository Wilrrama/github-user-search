import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Search from './Pages/Search';


const Routes = () => (
      <BrowserRouter>
            <Route path="/" exact >
                  <Home />
            </Route>
            <Route path="/Search" >
                  <Search />
            </Route>
      </BrowserRouter>

);

export default Routes;