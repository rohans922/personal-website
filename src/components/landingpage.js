import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames'
import { CSSTransition } from 'react-transition-group';
import me from './../assets/profile.png';
import resume from './../assets/Rohan Shaiva Resume.pdf'
import { useEffect } from "react";

class Landing extends Component {
  constructor() {
      super();
    this.state = {
      load: false,
      css_code: "lp",
      hideTop: false,
      showSentence1: false,
      showSentence2: false,
      dismiss: "",
      showBoxes: false
    };

    this.update = this.update.bind(this);
  }

  componentWillUnmount() {
    var curr = window.location.pathname;
    this.setState({load: false});
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

  componentDidMount() {
    setTimeout(() => {
      this.props.scrollTo(0);
    }, 300);
    setTimeout(() => {
      this.update(0);
    }, 350);
    setTimeout(() => {
      this.setState({load: true});
    }, 600)
  }

  componentDidUpdate(nextProps) {
    const { scrollLoc } = this.props
    if (nextProps.scrollLoc !== scrollLoc) {
      this.update(nextProps.scrollLoc)
    }
  }

  update(scrollLoc) {
    var id = document.querySelector('.lp.intro-sentence-2');
    // console.log(id.getBoundingClientRect().bottom)
    if (id.getBoundingClientRect().bottom < 90) {
      this.setState({showSentence1: false})
      this.setState({showSentence2: false})
      this.setState({dismiss: "dismiss"})
    } else if (id.getBoundingClientRect().bottom < 400) {
      this.setState({showBoxes: true})
    } else if (id.getBoundingClientRect().bottom >= 400) {
      this.setState({showBoxes: false})
    }
    if (id.getBoundingClientRect().bottom > 300 && this.state.dismiss === "dismiss") {
        this.setState({showBoxes: false});
        setTimeout(() => {
          this.props.scrollTo(0);
        }, 300);
        setTimeout(() => {
            this.setState({hideTop: false})
            this.setState({dismiss: ""})
        }, 310);
    }
    if (scrollLoc > 100) {
      this.setState({hideTop: true})
    } else if (scrollLoc <= 100) {
      this.setState({hideTop: false})
      this.setState({dismiss: ""})
    }
    if (scrollLoc < 100) {
      this.setState({showSentence1: false})
    } else if (scrollLoc >= 100 && scrollLoc < 500 && this.state.dismiss !== "dismiss") {
      this.setState({showSentence1: true})
    }
    if (scrollLoc < 300) {
      this.setState({showSentence2: false})
    } else if (scrollLoc >= 300 && scrollLoc < 500 && this.state.dismiss !== "dismiss") {
      this.setState({showSentence2: true})
    }
  }

  render() {
    return(
      <div className="page">
      <CSSTransition
        in={this.state.load}
        timeout={300}
        classNames={"fade-in"}>
      <div className="page-content">
        <CSSTransition
          in={this.state.hideTop}
          timeout={800}
          classNames={classNames(this.state.css_code, "slide-up")}>
          <div>
          <img
            src={me}
            alt="Rohan Shaiva"
            className={classNames(this.state.css_code, "profile-img")}
          />
          <div className={classNames(this.state.css_code, "banner-text")}>
            <h1>ROHAN SHAIVA</h1>
            <hr/>
            <pre>
            <p className={classNames(this.state.css_code, "wide-list")}>
              <Link to="/software-engineering" onClick={() => {this.props.selected("Software Engineering");}}>Software Engineer</Link>   |    <Link to="/film-and-media" onClick={() => {this.props.selected("Film and Media");}}>Film and Media</Link>   |    <Link to="/about-me" onClick={() => {this.props.selected("About Me");}}>Student at Tufts University</Link>
            </p>
            <p className={classNames(this.state.css_code, "mobile-list")}>
               <Link to="/software-engineering" onClick={() => {this.props.selected("Software Engineering");}}>Software Engineer</Link>  |  <Link to="/film-and-media" onClick={() => {this.props.selected("Film and Media");}}>Film and Media</Link><br/><Link className="tufts" to="/about-me" onClick={() => {this.props.selected("About Me");}}>Tufts University</Link>
            </p>
            </pre>
            <div className={classNames(this.state.css_code, "social-links")}>
              {/* LinkedIn */}
              <a href="https://www.linkedin.com/in/-rohan-shaiva-/" rel="noopener noreferrer" target="_blank">
                <i className="fab fa-linkedin" aria-hidden="true" />
              </a>
              {/* Resume */}
              <a href={resume} target="_blank">
                <i className="fas fa-file-invoice" aria-hidden="true" />
              </a>
              {/* GitHub */}
              <a href="https://github.com/rohans922" rel="noopener noreferrer" target="_blank">
                <i className="fab fa-github" aria-hidden="true" />
              </a>
              {/* YouTube */}
              <a href="https://www.youtube.com/channel/UCGzF2Bp2tzqI0xPmjVAWFdQ" rel="noopener noreferrer" target="_blank">
                <i className="fab fa-youtube" aria-hidden="true" />
              </a>
            </div>
          </div>
          <CSSTransition
            in={true}
            appear={true}
            timeout={800}
            classNames={"fade-in"}>
            <div className={classNames(this.state.css_code, "scroll-text")}>
              SCROLL<br/>
              <i className="fas fa-chevron-down"></i>
            </div>
          </CSSTransition>
          </div>
        </CSSTransition>
          <CSSTransition in={this.state.showSentence1} timeout={2100} classNames={"fade-in"}>
          <div className={classNames(this.state.css_code, "intro-sentence-1", this.state.dismiss)}>
            <p>
              Pursuing a degree in both Computer Science and Film has equipped me with an interdisciplinary mindset that allows me to blend creative insight with critical thinking.
            </p>
          </div>
          </CSSTransition>
          <CSSTransition in={this.state.showSentence2} timeout={1000} classNames={"fade-in"}>
          <div className={classNames(this.state.css_code, "intro-sentence-2", this.state.dismiss)}>
            <p>
            I aim to use my skills to create scalable solutions and offer innovative ideas that can stretch beyond the workplace and impact the world.
            </p>
          </div>
          </CSSTransition>
          <CSSTransition in={this.state.showBoxes} timeout={1000} classNames={"fade-in"}>
          <div className={classNames(this.state.css_code, "boxes")}>
            <div className={classNames(this.state.css_code, "lines")}>
              <CSSTransition in={this.state.showBoxes} timeout={1000} classNames={this.state.css_code, "wipe"}>
              <div className={classNames(this.state.css_code, "line1")}>
              <hr />
              </div>
              </CSSTransition>
              <CSSTransition in={this.state.showBoxes} timeout={1000} classNames={this.state.css_code, "wipe"}>
              <div className={classNames(this.state.css_code, "line2")}>
              <hr />
              </div>
              </CSSTransition>
              <div className={classNames(this.state.css_code, "boxes-heading")}> LEARN MORE </div>
              <CSSTransition in={this.state.showBoxes} timeout={1000} classNames={this.state.css_code, "wipe"}>
              <div className={classNames(this.state.css_code, "line1")}>
              <hr />
              </div>
              </CSSTransition>
              <CSSTransition in={this.state.showBoxes} timeout={1000} classNames={this.state.css_code, "wipe"}>
              <div className={classNames(this.state.css_code, "line2")}>
              <hr />
              </div>
              </CSSTransition>
               <i className="fas fa-chevron-down"></i>
            </div>
            <Link className={classNames(this.state.css_code, "box-link")} to="/software-engineering" onClick={() => {this.props.selected("Software Engineering");}}>
              <div className={classNames(this.state.css_code, "box","l")}>
                  <div className={classNames(this.state.css_code, "box-heading","l")}>
                    <hr/>
                  </div>
                <h1>
                  SOFTWARE ENGINEERING
                </h1>
                <div className={classNames(this.state.css_code, "box-row")}>
                  Professional Experience
                </div>
                <hr className={classNames(this.state.css_code, "box-line")}/>
                <div className={classNames(this.state.css_code, "box-row")}>
                  <ul>
                    <li>Skills</li>
                    <li>•</li>
                    <li>Education</li>
                    <li>•</li>
                    <li>Projects</li>
                  </ul>
                </div>
                <hr className={classNames(this.state.css_code, "box-line")}/>
                <div className={classNames(this.state.css_code, "box-row")}>
                  interdisciplinary Approach
                </div>
              </div>
            </Link>
            <Link className={classNames(this.state.css_code, "box-link")} to="/film-and-media" onClick={() => {this.props.selected("Film and Media");}}>
              <div className={classNames(this.state.css_code, "box","r")}>
                <div className={classNames(this.state.css_code, "box-heading","r")}>
                  <hr/>
                </div>
              <h1>
                FILM AND MEDIA
              </h1>
              <div className={classNames(this.state.css_code, "box-row")}>
                Multimedia Portfolio
              </div>
              <hr className={classNames(this.state.css_code, "box-line")}/>
              <div className={classNames(this.state.css_code, "box-row")}>
                <ul>
                  <li>Film</li>
                  <li>•</li>
                  <li>Skills</li>
                  <li>•</li>
                  <li>Music</li>
                </ul>
              </div>
              <hr className={classNames(this.state.css_code, "box-line")}/>
              <div className={classNames(this.state.css_code, "box-row")}>
                Education and Background
              </div>
              </div>
            </Link>
          </div>
          </CSSTransition>
          <div className="footer">
            Copyright 2021 • All Rights Reserved • <Link to="/about-this-site" onClick={() => {this.props.selected("About This Site");}}>About This Site</Link> • <Link to="/contact" onClick={() => {this.props.selected("Contact");}}>Contact Me</Link>
          </div>
          <div className="footer-compact">
            Copyright 2021 • All Rights Reserved
          </div>
        </div>
        </CSSTransition>
        </div>
     );
   }
}

export default Landing;
