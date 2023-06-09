import React from "react"
import {Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import Series from "./components/Movies_Series/Series";
import Movies from "./components/Movies_Series/Movies";
import Error from "./components/Error/Error";

function App() {
  return (
    <div>
       <Switch> 
        <Route exact path="/" component={Home}/>
        <Route path="/series" component={Series}/>
        <Route path="/movies" component={Movies}/>
        <Route path = "*" component={Error}/>
       </Switch>
      
      
    </div>
  );
}

export default App;
