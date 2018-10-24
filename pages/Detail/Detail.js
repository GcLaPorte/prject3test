import React, { Component } from "react";
import { Link } from "react-router-dom";
// import Nav from "../../components/Nav";
import DeleteBtn from "../../components/DeleteBtn";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import "./Detail.css";



const Nav = () => (
  <nav className="navbar navbar-dark bg-dark">
    <a className="navbar-brand">
    <p className="text-white">
      Event Assistant                             
    </p>
    </a><Link to="/main">Main</Link>
    <Link to="/main/:id/canvas">Floor Plan</Link>
    <Link to="/login">Log out</Link> 
  </nav>
);

// const Detail = () => (
//   <div>
//     <Nav />
//     <h1>Details</h1>
//     <p>Form for event data:  Most likely data fields
//     </p>
//     <div>
//     <Link to="/main">Main</Link>
//     </div>
//     <div>
//     <Link to="/login">Logout</Link>
//     </div>
//   </div>
// );

class Detail extends Component {
   
  state = {
    detailsArray: [],
    venue: "",
    guestCount: "",
    schedule: "",
    catering: "",
    entertainment: "",
    Notes: ""
  };


  render() {
    return(
      
      <div>
        <Nav />
      <Container fluid>
      
        <Row>
        <Col size="md-6">
            <h1>Event Details</h1>
            <form>
              <TextArea
                value={this.state.venue}
                onChange={this.hadleInputChange}
                name="venue"
                placeholder="Venue"
              />
                <TextArea
                value={this.state.guestCount}
                onChange={this.hadleInputChange}
                name="guestCount"
                placeholder="Guest Count"
              />
              <TextArea
                value={this.state.schedule}
                onChange={this.hadleInputChange}
                name="schedule"
                placeholder="Schedule"
              />
              <TextArea
                value={this.state.catering}
                onChange={this.hadleInputChange}
                name="catering"
                placeholder="Catering"
              />
              <TextArea
                value={this.state.entertainment}
                onChange={this.hadleInputChange}
                name="entertainment"
                placeholder="Entertainment"
              />
              <TextArea
                value={this.state.notes}
                onChange={this.hadleInputChange}
                name="notes"
                placeholder="Notes"
              />
              <FormBtn
                disable={!(this.state.eventName && this.state.eventDate)}
                onClick={this.handleFormSubmit}
              >
                Save Event Info
              </FormBtn>
            </form>
          </Col>
          </Row>
          </Container>
          </div>
          
          );
          }
          }

export default Detail;
