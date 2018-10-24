import React, { Component } from "react";
import { Link } from "react-router-dom";
// import Nav from "../../components/Nav";
import DeleteBtn from "../../components/DeleteBtn";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, FormBtn } from "../../components/Form";
    
const Nav = () => (
  <nav className="navbar navbar-dark bg-dark">
    <a className="navbar-brand">
    <p className="text-white">
      Event Assistant         
      </p>  
    </a>
    <Link to="/login">Logout</Link>
  </nav>
);


  class Main extends Component {
   
    state = {
      eventsArray: [],
      eventName: "",
      eventDate: "",
      eventClient: ""
    };


    render() {
      return(
        <div>
          <Nav />
      
        <Container fluid>
        
          <Row>
          <Col size="md-6">
              <h1>Make new event</h1>
              <form>
                <Input 
                  value={this.state.eventName}
                  onChange={this.hadleInputChange}
                  name="eventName"
                  placeholder="Event Name (required)"
                />
                <Input 
                  value={this.state.eventDate}
                  onChange={this.hadleInputChange}
                  name="eventDate"
                  placeholder="Event Date (required)"
                />
                <Input
                  value={this.state.eventClient}
                  onChange={this.hadleInputChange}
                  name="eventClient"
                  placeholder="Client (optional)"
                />
                <FormBtn
                  disable={!(this.state.eventName && this.state.eventDate)}
                  onClick={this.handleFormSubmit}
                >
                  Save Event
                </FormBtn>
              </form>
            </Col>

            <Col size="md-6">
            <h1>Events</h1>
            {this.state.eventsArray.length ? (
              <List>
                {this.state.eventsArray.map(event => (
                  <ListItem key={event._id}>
                    <Link to={"/main/" + event._id}>
                      <strong>
                        {event.eventName} by {event.eventDate}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteEvent(event._id)} />
                  </ListItem>
                ))}       
            </List>
            ): (<h3>:</h3>)}
            </Col>
            </Row>

            <Row>
              <Col size="md-4">
                  <ul>
                  <h2>Other options</h2>
                    {/* <li>Rolodex</li> */}
                    <li><Link to="/rolodex">Rolodex</Link></li>
                    {/* <li>Post Event</li> */}
                    <li><Link to="/postedEvent">Posted Events</Link></li>
                  </ul>
           
            </Col>
          </Row>
        </Container>
        </div>
      );
     }
    }

 


export default Main;