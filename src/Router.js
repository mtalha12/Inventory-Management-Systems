import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    //Link,
  } from 'react-router-dom'
  import Authentication from './Container/Authentication';  //'./Components/SignUpAppBar';
  import Home from './Container/Home';
  import HomeFurniture from './Components/HomeFurniture';
  import ShowItemComponent from './Container/ShowItems';



  let CustomRoutes =() => (
    <Router>
        <div>
            <Route exact path='/' component={Home}  />
            <Route exact path='/Authentication' component={Authentication} />
            <Route exact path='/HomeFurniture' component={HomeFurniture} />
            <Route exact path='/ShowItems/:key' component={ShowItemComponent} />

        </div>
    </Router>
  );

  export default CustomRoutes   