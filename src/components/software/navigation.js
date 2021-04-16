import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import classNames from 'classnames'
import smoothscroll from 'smoothscroll-polyfill';

function Navigation(props) {
  smoothscroll.polyfill();
  return (
  <CSSTransition in={props.state.section != "0"} timeout={800} classNames={"resize"}>
  <div className={classNames(props.state.css_code, "navigation")}>
    <ul>
      <li>
        <CSSTransition in={props.state.section == "1"} timeout={800} classNames={"resize"}>
          <div className={classNames(props.state.css_code, "nav-cell")} onMouseEnter={() => {props.setNavigationHover(0)}} onMouseLeave={() => {props.setNavigationHover(-1)}} onClick={() => {props.state.sectionRefs[0].current.scrollIntoView({behavior: 'smooth'});}}>
            EXPERIENCE
            <div className={classNames(props.state.css_code, "nav-cell-underline", "exp", props.state.navigationHover[0])}/>
          </div>
        </CSSTransition>
      </li>
      <li>
        <CSSTransition in={props.state.section == "2"} timeout={800} classNames={"resize"}>
          <div className={classNames(props.state.css_code, "nav-cell")} onMouseEnter={() => {props.setNavigationHover(1)}} onMouseLeave={() => {props.setNavigationHover(-1)}} onClick={() => {props.state.sectionRefs[1].current.scrollIntoView({behavior: 'smooth'});}}>
            COURSES
            <div className={classNames(props.state.css_code, "nav-cell-underline", "courses", props.state.navigationHover[1])}/>
          </div>
        </CSSTransition>
      </li>
      <li>
        <CSSTransition in={props.state.section == "3"} timeout={800} classNames={"resize"}>
          <div className={classNames(props.state.css_code, "nav-cell")} onMouseEnter={() => {props.setNavigationHover(2)}} onMouseLeave={() => {props.setNavigationHover(-1)}} onClick={() => {props.state.sectionRefs[2].current.scrollIntoView({behavior: 'smooth'});}}>
            SKILLS
            <div className={classNames(props.state.css_code, "nav-cell-underline", "skills", props.state.navigationHover[2])}/>
          </div>
        </CSSTransition>
      </li>
      <li>
        <CSSTransition in={props.state.section == "4"} timeout={800} classNames={"resize"}>
          <div className={classNames(props.state.css_code, "nav-cell")} onMouseEnter={() => {props.setNavigationHover(3)}} onMouseLeave={() => {props.setNavigationHover(-1)}} onClick={() => {props.state.sectionRefs[3].current.scrollIntoView({behavior: 'smooth'});}}>
            PROJECTS
            <div className={classNames(props.state.css_code, "nav-cell-underline", "projects", props.state.navigationHover[3])}/>
          </div>
        </CSSTransition>
      </li>
      <li>
        <CSSTransition in={props.state.section == "5"} timeout={800} classNames={"resize"}>
          <div className={classNames(props.state.css_code, "nav-cell")} onMouseEnter={() => {props.setNavigationHover(4)}} onMouseLeave={() => {props.setNavigationHover(-1)}} onClick={() => {props.state.sectionRefs[4].current.scrollIntoView({behavior: 'smooth'});}}>
            MORE
            <div className={classNames(props.state.css_code, "nav-cell-underline", "more", props.state.navigationHover[4])}/>
          </div>
        </CSSTransition>
      </li>
    </ul>
    <CSSTransition in={props.state.section != "0" && props.state.section != "-1"} timeout={1000} classNames={"fade-in"}>
      <div className={classNames(props.state.css_code, "nav-arrow-container")}>
        <div className={classNames(props.state.css_code, "nav-arrow", props.state.section)}><i class="fas fa-caret-up"></i></div>
      </div>
    </CSSTransition>
  </div>
  </CSSTransition> )
}

export default Navigation;
