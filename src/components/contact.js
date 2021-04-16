import React, { Component} from 'react';
import classNames from 'classnames'
import { CSSTransition, TransitionGroup } from 'react-transition-group';

class Contact extends Component {

  constructor() {
      super();
    this.state = {
      css_code: "c"
    };
  }


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
              <div>
                <div className={classNames(this.state.css_code, "social-links")}>
                  {/* LinkedIn */}
                  <a href="https://www.linkedin.com/in/-rohan-shaiva-/" rel="noopener noreferrer" target="_blank">
                    <i className="fab fa-linkedin" aria-hidden="true" />
                  </a>
                  {/* Email */}
                  <a href="mailto:rohan.shaiva@tufts.edu" rel="noopener noreferrer" target="_blank">
                    <i className="fas fa-envelope" aria-hidden="true" />
                  </a>
                  {/* GitHub */}
                  <a href="https://github.com/rohans922" rel="noopener noreferrer" target="_blank">
                    <i className="fab fa-github" aria-hidden="true" />
                  </a>
                </div>
                <h1 className="under-construction"><b>This page is currently under construction.</b><br/>Come back soon!</h1>
              </div>
          </CSSTransition>
        </div>
      </div>
    );
  }
}

export default Contact;
