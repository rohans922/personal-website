import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import classNames from 'classnames'

function Navigation(props) {
  return (
  <CSSTransition in={props.state.section != "0"} timeout={800} classNames={"resize"}>
  <div className={classNames(props.state.css_code, "navigation")}>
    <ul>
      <li>
        <CSSTransition in={props.state.section == "1"} timeout={800} classNames={"resize"}>
          <div className={classNames(props.state.css_code, "nav-cell")}>EXPERIENCE</div>
        </CSSTransition>
      </li>
      <li>
        <CSSTransition in={props.state.section == "2"} timeout={800} classNames={"resize"}>
          <div className={classNames(props.state.css_code, "nav-cell")}>COURSES</div>
        </CSSTransition>
      </li>
      <li>
        <CSSTransition in={props.state.section == "3"} timeout={800} classNames={"resize"}>
          <div className={classNames(props.state.css_code, "nav-cell")}>SKILLS</div>
        </CSSTransition>
      </li>
      <li>
        <CSSTransition in={props.state.section == "4"} timeout={800} classNames={"resize"}>
          <div className={classNames(props.state.css_code, "nav-cell")}>PROJECTS</div>
        </CSSTransition>
      </li>
      <li>
        <CSSTransition in={props.state.section == "5"} timeout={800} classNames={"resize"}>
          <div className={classNames(props.state.css_code, "nav-cell")}>MORE</div>
        </CSSTransition>
      </li>
    </ul>
    <CSSTransition in={props.state.section != "0" && props.state.section != "-1"} timeout={1000} classNames={"fade-in"}>
      <div className={classNames(props.state.css_code, "nav-arrow-container")}>
        <CSSTransition in={props.state.moveAnimate} timeout={1000} classNames={"slide"}>
          <div className={classNames(props.state.css_code, "nav-arrow", props.state.prevSectionDir, props.state.section)}><i class="fas fa-caret-up"></i></div>
        </CSSTransition>
      </div>
    </CSSTransition>
  </div>
  </CSSTransition> )
}

export default Navigation;
