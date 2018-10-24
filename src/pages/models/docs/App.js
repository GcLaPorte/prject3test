import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SignIn from "../../SignIn";
import SignUp from "../../SignUp";
import Main from "./pages/Main";
import Detail from "./pages/Detail";
import CanvasComponent from "./pages/Canvas";

// import {
//   ReactiveBase,
//   CategorySearch,
//   RatingsFilter,
//   ResultCard
// } from '@appbaseio/reactivesearch';

const App = () => (
    <Router>
      <div className="container fluid">

          <Route exact path="/" component={SignIn} />
          <Route exact path="/login" component={SignIn} />
          <Route exact path="/main" component={Main} />
          <Route exact path="/main/:id" component={Detail} />
          <Route exact path="/main/:id/canvas" component={CanvasComponent} />
          {/* <Route exact path="/rolodex" component={Rolodex} /> */}

      </div>
    </Router>
  );
  
  export default App;