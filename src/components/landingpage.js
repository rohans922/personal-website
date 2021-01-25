import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames'
import { CSSTransition } from 'react-transition-group';
import me from './../assets/me.png'
import resume from './../assets/Rohan Shaiva Resume.pdf'

class Landing extends Component {
  constructor() {
      super();
    this.state = {
      loaded: false,
      hideTop: false,
      showSentence1: false,
      showSentence2: false,
      dismiss: "",
      showBoxes: false
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({loaded: true})
    }, 4000);
  }

  componentDidUpdate(nextProps) {
    const { scrollLoc } = this.props
    // console.log(nextProps.scrollLoc, " ", scrollLoc)
    if (nextProps.scrollLoc !== scrollLoc) {
      var id = document.querySelector('.rohan-sentence-2');
      console.log(id.getBoundingClientRect().bottom)
      if (id.getBoundingClientRect().bottom < 90) {
        this.setState({showSentence1: false})
        this.setState({showSentence2: false})
        this.setState({dismiss: "dismiss"})
      } else if (id.getBoundingClientRect().bottom < 400) {
        this.setState({showBoxes: true})
      } else if (id.getBoundingClientRect().bottom >= 400) {
        this.setState({showBoxes: false})
      } else if (id.getBoundingClientRect().bottom > 300 && this.state.dismiss === "dismiss") {
          this.props.scrollTo(0);
          setTimeout(() => {
              this.setState({hideTop: false})
              this.setState({dismiss: ""})
          }, 10);
      }
      // console.log(id.getBoundingClientRect().bottom);
      // console.log(nextProps.scrollLoc)
      if (nextProps.scrollLoc > 100) {
        this.setState({hideTop: true})
      } else if (nextProps.scrollLoc <= 100) {
        this.setState({hideTop: false})
        this.setState({dismiss: ""})
      }
      if (nextProps.scrollLoc < 100) {
        this.setState({showSentence1: false})
      } else if (nextProps.scrollLoc >= 100 && nextProps.scrollLoc < 500 && this.state.dismiss !== "dismiss") {
        this.setState({showSentence1: true})
      }
      if (nextProps.scrollLoc < 300) {
        this.setState({showSentence2: false})
      } else if (nextProps.scrollLoc >= 300 && nextProps.scrollLoc < 500 && this.state.dismiss !== "dismiss") {
        this.setState({showSentence2: true})
      }
    }

  }

  render() {
    return(
      <div className="page">
      <CSSTransition
        in={true}
        appear={true}
        timeout={1000}
        classNames={"fade-in"}>
      <div>
        <CSSTransition
          in={this.state.hideTop}
          timeout={800}
          classNames={"slide-up"}>
          <div>
          <img
            src={me}
            alt="Rohan Shaiva"
            className="profile-img"
          />
          <div className="banner-text">
            <h1>ROHAN SHAIVA</h1>
            <hr/>
            <pre>
            <p className="wide-list">
              <Link to="/software-engineering" onClick={() => {this.props.selected("Software Engineering");}}>Software Engineer</Link>   |    <Link to="/film-and-media" onClick={() => {this.props.selected("Film and Media");}}>Film and Media</Link>   |    <Link to="/about-me" onClick={() => {this.props.selected("About Me");}}>Student at Tufts University</Link>
            </p>
            <p className="mobile-list">
               <Link to="/software-engineering" onClick={() => {this.props.selected("Software Engineering");}}>Software Engineer</Link>  |  <Link to="/film-and-media" onClick={() => {this.props.selected("Film and Media");}}>Film and Media</Link><br/><Link className="tufts" to="/about-me" onClick={() => {this.props.selected("About Me");}}>Tufts University</Link>
            </p>
            </pre>
            <div className="social-links">
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
            <div className="scroll">
              SCROLL<br/>
              <i className="fas fa-chevron-down"></i>
            </div>
          </CSSTransition>
          </div>
        </CSSTransition>
          <CSSTransition in={this.state.showSentence1} timeout={2100} classNames={"fade-in"}>
          <div className={classNames("rohan-sentence", this.state.dismiss)}>
            <p>
              Pursuing a degree in both Computer Science and Film has equipped me with an interdisciplinary mindset that allows me to blend creative insight with logic.
            </p>
          </div>
          </CSSTransition>
          <CSSTransition in={this.state.showSentence2} timeout={1000} classNames={"fade-in"}>
          <div className={classNames("rohan-sentence-2", this.state.dismiss)}>
            <p>
            I aim to use my skills to create scalable solutions and offer innovative ideas that can stretch beyond the workplace and impact the world.“
            </p>
          </div>
          </CSSTransition>
          <CSSTransition in={this.state.showBoxes} timeout={1000} classNames={"fade-in"}>
          <div className="boxes">
            <div className="box">
              <p>
              I aim to use my skills to create scalable solutions and offer innovative ideas that can stretch beyond the workplace and impact the world.“
              </p>
            </div>
            <div className="box">
              <p>
              I aim to use my skills to create scalable solutions and offer innovative ideas that can stretch beyond the workplace and impact the world.“
              </p>
            </div>
          </div>
          </CSSTransition>
          <div className="gap"/>
        </div>
        </CSSTransition>
        </div>
     );
   }
}

export default Landing;
