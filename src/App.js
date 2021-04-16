import './stylesheets/App.css';
import './stylesheets/landingpage.css';
import './stylesheets/software.css';
import React from 'react';
import { Header, Layout, Navigation, Drawer, Content } from 'react-mdl';
import { Link } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import smoothscroll from 'smoothscroll-polyfill';
import classNames from 'classnames';
import Main from './components/main';
import resume from './assets/Rohan Shaiva Resume.pdf';

class App extends React.Component {
  constructor() {
      super();
    this.myRef = React.createRef();
    this.state = {
      boldText: " ",
      drawerVisible: "false",
      headerColor: "black",
      backgroundColor: "black",
      scrollLoc: 0,
      sidebarName: "Quick Links"
    };
    this.handleScroll = this.handleScroll.bind(this);
    this.scrollToTop = this.scrollToTop.bind(this);
    this.scrollTo = this.scrollTo.bind(this);
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    var curr = window.location.pathname;
    switch(curr) {
      case "/":
        this.selected("Welcome")
        break;
      case "/software-engineering":
        this.selected("Software Engineering")
        break;
      case "/film-and-media":
        this.selected("Film and Media")
        break;
      case "/about-me":
        this.selected("About Me")
        break;
      case "/contact":
        this.selected("Contact")
        break;
      case "/about-this-site":
        this.selected("About This Site")
        break;
      default:
        console.log("Error")
    }
    this.updateWindowDimensions();
    smoothscroll.polyfill();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    if (window.innerWidth < 730) {
      this.setState({sidebarName: "Navigation"})
    } else {
      this.setState({sidebarName: "Quick Links"})
    }
  }

  hideToggle() {
    var layoutID = document.querySelector('.mdl-layout');
    layoutID.MaterialLayout.toggleDrawer();
  }

  scrollToTop() {
    console.log(this.myRef)
    this.myRef.current.scrollIntoView({behavior: 'smooth'})
  }

  scrollTo(loc) {
    console.log("SCROLLING TO " + String(loc));
    var contentID = document.querySelector('.mdl-layout__content');
    contentID.scrollTop = 0;
    this.setState({scrollLoc: contentID.scrollTop});
  }


  handleScroll() {
    // console.log(this.state.backgroundColor)
    var contentID = document.querySelector('.mdl-layout__content')
    this.setState({scrollLoc: contentID.scrollTop});
    if (this.state.boldText == "Welcome") {
      if (this.state.scrollLoc <= 100) {
        this.setState({backgroundColor: "blue"})
      } else if (this.state.scrollLoc > 100 && this.state.scrollLoc <= 500) {
        this.setState({backgroundColor: "purple"})
      }
      var id = document.querySelector('.lp.intro-sentence-2');
      if (id.getBoundingClientRect().bottom < 400) {
          this.setState({backgroundColor: "green"})
      }
    }
  }

  selected = (name) => {
    var color = "blue";
    switch(name) {
      case "Welcome":
        color = "blue"
        break;
      case "Software Engineering":
        color = "dark-green"
        break;
      case "Film and Media":
        color = "light-red"
        break;
      case "About Me":
        color = "light-green"
        break;
      case "Contact":
        color = "light-blue"
        break;
      case "About This Site":
        color = "gray"
        break;
      default:
        console.log("Error")
    }
    this.setState({boldText: name, backgroundColor: color, headerColor: color})
  }

  render() {
    return (
      <div>
      <Layout fixedHeader>
        <Header className={classNames("header", this.state.headerColor)}
          title={<TransitionGroup>
                <CSSTransition key={this.state.boldText} timeout={1000} classNames="fade-in">
                <div className="header-title">
                 {this.state.boldText}
                 </div>
                </CSSTransition>
              </TransitionGroup>}>
              <TransitionGroup>
                <CSSTransition key={this.state.boldText} timeout={1000} classNames="fade-in">
                <div>
                  <div className="narrow-header">
                    {this.state.boldText}
                  </div>
                  <div className="home-button">
                    <Link className="home-button-link" to="/" onClick={() => {this.selected("Welcome");}}>
                      <i className="fas fa-home"></i>
                    </Link>
                  </div>
                </div>
                </CSSTransition>
              </TransitionGroup>
              <div className="navigation">
                <ul>
                  <li><Link className={classNames({
                                    'link-bold': this.state.boldText === "Welcome",
                                    'link': this.state.boldText !== "Welcome"
                                  })} onClick={() => {this.selected("Welcome")}} to="/">Home</Link></li>
                  <li><Link className={classNames({
                                    'link-bold': this.state.boldText === "Software Engineering",
                                    'link': this.state.boldText !== "Software Engineering"
                                  })} onClick={() => {this.selected("Software Engineering")}} to="/software-engineering">Software Engineering</Link></li>
                  {
                    // <li><Link className={classNames({
                    //                 'link-bold': this.state.boldText === "Film and Media",
                    //                 'link': this.state.boldText !== "Film and Media"
                    //               })} onClick={() => {this.selected("Film and Media")}} to="/film-and-media">Film and Media</Link></li>
                                }
                  {
                  // <li><Link className={classNames({
                  //                   'link-bold': this.state.boldText === "About Me",
                  //                   'link': this.state.boldText !== "About Me"
                  //                 })} onClick={() => {this.selected("About Me")}} to="/about-me">About Me</Link></li>
                                }
                  <li><Link className={classNames({
                                    'link-bold': this.state.boldText === "Contact",
                                    'link': this.state.boldText !== "Contact"
                                  })} onClick={() => {this.selected("Contact")}} to="/contact">Contact</Link></li>
                </ul>
              </div>
          </Header>
          <Drawer title={this.state.sidebarName}>
            <Navigation>
                <Link className="link" to="/" onClick={() => {this.hideToggle(); this.selected("Welcome");}}>Home</Link>
                <Link className="link-show" to="/software-engineering" onClick={() => {this.hideToggle(); this.selected("Software Engineering");}}>Software Engineering</Link>
                <Link className="link-show" to="/film-and-media" onClick={() => {this.hideToggle(); this.selected("Film and Media");}}>Film and Media</Link>
                <Link className="link-show" to="/about-me" onClick={() => {this.hideToggle(); this.selected("About Me");}}>About Me</Link>
                <Link className="link-show" to="/contact" onClick={() => {this.hideToggle(); this.selected("Contact");}}>Contact</Link>
                <a className="link" href="https://www.linkedin.com/in/-rohan-shaiva-/" rel="noopener noreferrer" onClick={() => this.hideToggle()} target="_blank">LinkedIn</a>
                <a className="link" href={resume} target="_blank" onClick={() => this.hideToggle()}>Resume</a>
                <a className="link" href="https://github.com/rohans922/" rel="noopener noreferrer" onClick={() => this.hideToggle()} target="_blank">GitHub</a>
                <Link className="link" to="/about-this-site" onClick={() => {this.hideToggle(); this.selected("About This Site")}}>About This Site</Link>
            </Navigation>
          </Drawer>
            <TransitionGroup>
              <CSSTransition key={this.state.backgroundColor} timeout={1000} classNames="background-fade-in">
              <div className={classNames("background", this.state.backgroundColor)}>
              </div>
              </CSSTransition>
            </TransitionGroup>
          <Content onScroll={this.handleScroll} containerid={"content"}>
            <div className="top" ref={this.myRef}/>
            <Main scrollTo={this.scrollTo} scrollToTop={this.scrollToTop} scrollLoc={this.state.scrollLoc} selected={this.selected}/>
          </Content>
      </Layout>
      </div>
    );
  }
}

export default App;
