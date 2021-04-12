import React, { Component} from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import classNames from 'classnames'
import image1 from './../assets/images/image-1.svg';
import image2 from './../assets/images/image-2.svg';
import image3 from './../assets/images/image-3.svg';

class FMS extends Component {

  constructor() {
      super();
    this.state = {
      load: false,
      css_code: "fms",
      prevSection: "-1",
      section: "0",
      prevSectionDir: "-1",
      directionPrefix: "",
      move: false,
      moveAnimate: false,
      showIntro: false,
      showImage1: false,
      showImage2: false,
      showImage3: false,
      showImages: true,
      showBox: false,
      scrollUp: false
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
    setTimeout(() => {  this.setState({showImage1: true}); }, 1000);
    setTimeout(() => {
      this.props.scrollTo(0);
    }, 300);
    setTimeout(() => {
      this.update(0, 1);
    }, 350);
    setTimeout(() => {
      this.setState({load: true});
    }, 1200)
  }

  componentDidUpdate(nextProps) {
    const { scrollLoc } = this.props
    if (nextProps.scrollLoc !== scrollLoc) {
      this.update(nextProps.scrollLoc, scrollLoc)
    }
  }

  update(scrollLoc, oldLoc) {
    if (scrollLoc > 140 && !this.state.scrollUp) {
      this.setState({showImage2: true});
    } else if (scrollLoc <= 140) {
      this.setState({showImage2: false});
    }
    if (scrollLoc > 400 && !this.state.scrollUp) {
      this.setState({showImage3: true});
    } else if (scrollLoc <= 400) {
      this.setState({showImage3: false});
    }
    if (scrollLoc > 800 && !this.state.scrollUp) {
      this.setState({showImages: false, scrollUp: true});
      setTimeout(() => {this.setState({showBox: true, showImage2: false, showImage3: false, section: "-1"});}, 300);
    } else if (scrollLoc < 800) {
      this.setState({showBox: false});
      if (this.state.scrollUp) {
        setTimeout(() => {this.props.scrollTo(0);}, 600);
        setTimeout(() => {this.setState({scrollUp: false, showImages: true, section: "0", prevSection: "-1"});}, 610);
      }
    }
    if (scrollLoc < 1000) {
      this.setState({showIntro: false})
    }
    if (scrollLoc > 1000 && this.state.prevSection == "-1") {
      this.setState({section: "1", prevSectionDir: this.state.directionPrefix + "0", prevSection: "0", showIntro: true})
    } else if (scrollLoc < 1000 && scrollLoc > 800) {
      this.setState({section: "-1"})
    }
    if (scrollLoc > oldLoc) {
      this.setState({directionPrefix: "r"})
    } else {
      this.setState({directionPrefix: ""})
    }
    if (this.state.section != "1" && scrollLoc > 1000 && scrollLoc < 1300) {
      this.setState({moveAnimate: false})
      setTimeout(() => {
        this.setState({prevSection: this.state.section, prevSectionDir: this.state.directionPrefix + this.state.section})
        this.setState({section: "1", move: true, moveAnimate: true})
      }, 5);
    }
    if (this.state.section != "2" && scrollLoc > 1300 && scrollLoc < 1600) {
      this.setState({moveAnimate: false})
      setTimeout(() => {
        this.setState({prevSection: this.state.section, prevSectionDir: this.state.directionPrefix + this.state.section})
        this.setState({section: "2", move: true, moveAnimate: true})
      }, 5);
    }
    if (this.state.section != "3" && scrollLoc > 1600 && scrollLoc < 1900) {
      this.setState({moveAnimate: false})
      setTimeout(() => {
        this.setState({prevSection: this.state.section, prevSectionDir: this.state.directionPrefix + this.state.section})
        this.setState({section: "3", move: true, moveAnimate: true})
      }, 5);
    }
    if (this.state.section != "4" && scrollLoc > 1900 && scrollLoc < 2200) {
      this.setState({moveAnimate: false})
      setTimeout(() => {
        this.setState({prevSection: this.state.section, prevSectionDir: this.state.directionPrefix + this.state.section})
        this.setState({section: "4", move: true, moveAnimate: true})
      }, 5);
    }
    if (this.state.section != "5" && scrollLoc > 2200) {
      this.setState({moveAnimate: false})
      setTimeout(() => {
        this.setState({prevSection: "4", prevSectionDir: this.state.directionPrefix + "4"})
        this.setState({section: "5", move: true, moveAnimate: true})
      }, 5);
    }

    setTimeout(() => {
      if (this.state.move) {
        console.log("Moved")
        this.setState({move: false});
      }
    }, 100);
  }

  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <div className="page">
          <CSSTransition
            in={this.state.load}
            timeout={300}
            classNames={"fade-in"}>
              <div className="page-content">
                <CSSTransition in={this.state.showIntro} timeout={1000} classNames={"fade-out"}>
                  <div className={classNames(this.state.css_code, "intro-content")}>
                    <CSSTransition in={this.state.showImages} timeout={1000} classNames={"fade-in"}>
                    <div>
                      <CSSTransition in={this.state.showImage1} timeout={1000} classNames={"fade-in"}>
                        <img src={image1} className={classNames(this.state.css_code, "intro-image-1")}></img>
                      </CSSTransition>
                      <CSSTransition in={this.state.showImage2} timeout={1000} classNames={"fade-in"}>
                        <img src={image2} className={classNames(this.state.css_code, "intro-image-2")}></img>
                      </CSSTransition>
                      <CSSTransition in={this.state.showImage3} timeout={1000} classNames={"fade-in"}>
                        <img src={image3} className={classNames(this.state.css_code, "intro-image-3")}></img>
                      </CSSTransition>
                    </div>
                    </CSSTransition>
                    <div className={classNames(this.state.css_code, "intro-gap")}></div>
                    <CSSTransition in={this.state.showBox} timeout={1000} classNames={"fade-in"}>
                      <div className={classNames(this.state.css_code, "intro-box")}>I’m currently a senior at Tufts University graduating in May 2021 with a B.S. in Computer Science.</div>
                    </CSSTransition>
                    <div className={classNames(this.state.css_code, "intro-box")}></div>
                  </div>
                </CSSTransition>
                <CSSTransition in={this.state.section != "0"} timeout={800} classNames={"resize"}>
                <div className={classNames(this.state.css_code, "navigation")}>
                  <ul>
                    <li>
                      <CSSTransition in={this.state.section == "1"} timeout={800} classNames={"resize"}>
                        <div className={classNames(this.state.css_code, "nav-cell")}>EXPERIENCE</div>
                      </CSSTransition>
                    </li>
                    <li>
                      <CSSTransition in={this.state.section == "2"} timeout={800} classNames={"resize"}>
                        <div className={classNames(this.state.css_code, "nav-cell")}>SKILLS</div>
                      </CSSTransition>
                    </li>
                    <li>
                      <CSSTransition in={this.state.section == "3"} timeout={800} classNames={"resize"}>
                        <div className={classNames(this.state.css_code, "nav-cell")}>EDUCATION</div>
                      </CSSTransition>
                    </li>
                    <li>
                      <CSSTransition in={this.state.section == "4"} timeout={800} classNames={"resize"}>
                        <div className={classNames(this.state.css_code, "nav-cell")}>PROJECTS</div>
                      </CSSTransition>
                    </li>
                    <li>
                      <CSSTransition in={this.state.section == "5"} timeout={800} classNames={"resize"}>
                        <div className={classNames(this.state.css_code, "nav-cell")}>MORE</div>
                      </CSSTransition>
                    </li>
                  </ul>
                  <CSSTransition in={this.state.section != "0" && this.state.section != "-1"} timeout={1000} classNames={"fade-in"}>
                    <div className={classNames(this.state.css_code, "nav-arrow-container")}>
                      <CSSTransition in={this.state.moveAnimate} timeout={1000} classNames={"slide"}>
                        <div className={classNames(this.state.css_code, "nav-arrow", this.state.prevSectionDir, this.state.section)}><i class="fas fa-caret-up"></i></div>
                      </CSSTransition>
                    </div>
                  </CSSTransition>
                </div>
                </CSSTransition>
            </div>
          </CSSTransition>
        </div>
      </div>
    );
  }
}

export default FMS;
