import React from 'react';
import './App.css';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import {Switch,Route} from 'react-router-dom';

const HatsPage=()=>(
  <div>
    <h1>HATS</h1>
  </div>
)

function App() {
  return (
    <div> 
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
