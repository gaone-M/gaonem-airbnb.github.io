import React from 'react';


import './App.css';
import Home from './Home'
import Header from './Header'
import Footer from './Footer'
import SearchPage from './SearchPage'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
 function App() {

  return (

    //BEM
    <div className="app">
      {/*<h1>Let's build AirBnB Clone</h1>*/}

      <Router>
        <Header />

        <Switch>
        <Route path="/search">
          <SearchPage/>
        </Route>
        <Route path="/">
          <Home />
        </Route>

        </Switch> 

        <Footer/>

      </Router> 
    </div>

    
  );
}

export default App;
