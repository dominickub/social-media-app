import React,{useState} from 'react';
import { Switch, Route } from "react-router-dom"
import './App.css';
import Profile from './Profile';

import FriendPage from './FriendPage';

import About from './About'
import NavBar from './NavBar'
 

function App() {
  const [page, setPage] = useState("/profile")

  return (

  <div>
    <NavBar onChangePage={setPage}/>
    <Switch>
        <Route path ="/about">
              <About/>
        </Route>
        <Route path="/friendPage">
              <FriendPage/>
        </Route>
        <Route path ="/profile">
              <Profile/>
        </Route>

    </Switch>
  </div>

  );
}

export default App;

// cdbf32f420277e5184c6330f2c80635b8b2ae0f9


// 426f48471ae0fb2ad649aeb7186b22de2c6a54cb