import React, { Component } from "react";
import "./Login.css";

class Login extends Component {
 
  state = {
    userName: "",    
    password: ""
  };

  handleInputChange = event => {

    let value = event.target.value;
    const name = event.target.name;

    if (name === "password") {
      value = value.substring(0, 15);
    }
  
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
   
    event.preventDefault();
    if (!this.state.userName) {
      alert("Fill out your user name please!");
    } else if (this.state.password.length < 6) {
      alert(
        `Choose a more secure password ${this.state.userName}`
      );
    } else {
      alert(`Hello ${this.state.userName}`);
    }

    this.setState({
      userName: "",    
      password: ""
    });
  };

  render() {
   
    return (
      <div className="color container" >
        <p>
          Sign in to Event Assistant {this.state.userName} 
        </p>
        <form className="form">
          <input
            value={this.state.userName}
            name="userName"
            onChange={this.handleInputChange}
            type="text"
            placeholder="User Name"
          />
          <input
            value={this.state.password}
            name="password"
            onChange={this.handleInputChange}
            type="password"
            placeholder="Password"
          />
          <button onClick={this.handleFormSubmit}>Login</button>
          <button onClick={this.handleFormSubmit}>Register</button>
        </form>
      </div>
    );
  }
}

export default Login;
