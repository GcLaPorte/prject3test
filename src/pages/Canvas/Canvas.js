import React, { Component } from "react";
// import React from "react";
import { Link } from "react-router-dom";
// import Nav from "../../components/Nav";
// import DeleteBtn from "../../components/DeleteBtn";
// import { Col, Row, Container } from "../../components/Grid";
// import { List, ListItem } from "../../components/List";
// import { Input, TextArea, FormBtn } from "../../components/Form";

const Nav = () => (
    <nav className="navbar navbar-dark bg-dark">
      <a className="navbar-brand">
      <p className="text-white">
        Event Assistant        
      </p>  
      </a>
      <Link to="/main/:id">Details</Link>
      <Link to="/login">Logout</Link>
    </nav>
  );

  // const Canvas = () => (
  //   <div>
  //     <Nav />
  //     <h1>Canvas</h1>
  //     <p>canvas page
  //     </p>
  //   </div>
  // );
  
  // export default Canvas;
  

// class Canvas extends Component {
   
//     // componentDidMount() {
//     //     this.updateCanvas();
//     // }
//     // updateCanvas() {
//     //     const ctx = this.refs.canvas.getContext('2d');
//     //     ctx.fillRect(0,0, 100, 100);
//     // }
//     render() {     
//         return (
//         <div>
//             <Nav />
//                 <h1>Floor Plan</h1>
//                 <canvas ref="canvas" width={300} height={300}/>
//         </div>
//         );
//     }
// }

// // ReactDOM.render(<CanvasComponent/>, document.getElementById('container'));

// export default Canvas;


export default class CanvasComponent extends React.Component {

    constructor(props) {
        super(props);

        this._resizeHandler = () => {
            /* Allows CSS to determine size of canvas */
            this.canvas.width = this.canvas.clientWidth;
            this.canvas.height = this.canvas.clientHeight;

            this.clearAndDraw();
        }
    }

    componentDidMount() {
        window.addEventListener('resize', this._resizeHandler);

        /* Allows CSS to determine size of canvas */
        this.canvas.width = this.canvas.clientWidth;
        this.canvas.height = this.canvas.clientHeight;

        this.clearAndDraw();
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this._resizeHandler);
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.secondRect !== prevProps.secondRect) {
            this.clearAndDraw();
        }
    }

    clearAndDraw() {
        const ctx = this.canvas.getContext('2d');
        if (ctx) {
            ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.draw(ctx);
        }
    }

    draw(ctx) {
        ctx.fillStyle = 'rgb(200, 0, 0)';
        ctx.fillRect(10, 10, 50, 50);

        if (this.props.secondRect) {
            ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
            ctx.fillRect(30, 30, 50, 50);
        }
    }

    render() {
        return (
            <div>
            <Nav />
            <canvas ref={canvas => this.canvas = canvas} />
            </div>
        );
    }
}