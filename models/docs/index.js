import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// import '@appbaseio/reactivesearch/dist/css/style.min.css';
import createHistory from 'history/createBrowserHistory';


// import './index.css';
import Routes from './Routes';
import registerServiceWorker from './registerServiceWorker';


export default createHistory({
  basename: process.env.NODE_ENV === 'development' ? '' : '/reactivesearch-auth0-example'
});

ReactDOM.render(<App />, document.getElementById("root"));


