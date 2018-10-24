import React, { Component } from 'react';

import {BrowserRouter as Router, Route, Link } from react-router-dom;

// import home from "./pages/home";
// import about from "./pages/about";
// import contact from "./pages/contact";

import Main from "../../Main";

class App extends Component {
  render() {
    return (

      <router>
<div>


        <ul>
          <li>
            <link to = "./Main" >Home </link>
            </li>

             {/* <li>
             <link to = "/about">About </link>
            </li>

             <li>
             <link to = "/contact" >Contact</link>
            </li> */}

        </ul>






<Route exact path ="/" Component={Main}/>

{/* <Route path ="/about" Component={about}/>

<Route path = "/contact" Component={contact}/> */}





</div>



      </router>
    );
  }
}

export default App;
