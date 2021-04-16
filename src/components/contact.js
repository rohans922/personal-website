import React, { Component} from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

class Contact extends Component {
  componentWillUnmount() {
    var curr = window.location.pathname;
    switch(curr) {
      case "/":
        this.props.selected("Welcome")
        break;
      case "/software-engineering":
        this.props.selected("Software Engineering")
        break;
      case "/film-and-media":
        this.props.selected("Film and Media")
        break;
      case "/about-me":
        this.props.selected("About Me")
        break;
      case "/contact":
        this.props.selected("Contact")
        break;
      case "/about-this-site":
        this.props.selected("About This Site")
        break;
      default:
        console.log("Error")
    }
  }

  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <div className="page">
          <CSSTransition
            in={true}
            appear={true}
            timeout={1000}
            classNames={"fade-in"}>
              <h1 className="under-construction"><b>This page is currently under construction.</b><br/>Come back soon!</h1>
          </CSSTransition>
        </div>
      </div>
    );
  }
}

export default Contact;
