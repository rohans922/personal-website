import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Link,
  Route, // for later
  Redirect, // for later
  Switch, // for later
} from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import LandingPage from './landingpage';
import FMS from './FMS';
import AboutMe from './aboutme';
import Software from './software';
import Contact from './contact';
import AboutSite from './aboutsite';

const routes = [
  { path: '/', name: 'Home', Component: LandingPage },
  { path: '/film-and-media', name: 'Film and Media', Component: FMS },
  { path: '/about-me', name: 'About Me', Component: AboutMe },
  { path: '/software-engineering', name: 'Software Engineering', Component: Software },
  { path: '/contact', name: 'Contact', Component: Contact },
  { path: '/about-this-site', name: 'About This Site', Component: AboutSite },
]

class Main extends Component {
  render() {
    return (
      <Route render={({location}) => (
        <TransitionGroup>
          <CSSTransition
            key={location.key}
            timeout={300}
            classNames="fade-in">
          <Switch location={location}>
             <Route exact path="/" render={(props) => (
                                  <LandingPage {...props} scrollTo={this.props.scrollTo} scrollLoc={this.props.scrollLoc} selected={this.props.selected}/>
                                )} />
             <Route exact path="/film-and-media" component={FMS} />
             <Route exact path="/about-me" component={AboutMe} />
             <Route exact path="/software-engineering" component={Software} />
             <Route exact path="/contact" component={Contact} />
             <Route exact path="/about-this-site" component={AboutSite} />
           </Switch>
         </CSSTransition>
        </TransitionGroup>
      )}/>
    )
  }
}

export default Main;
