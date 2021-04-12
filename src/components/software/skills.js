import React, {useEffect} from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import classNames from 'classnames'
import arrow from './../../assets/images/arrow.gif'

function Skills(props) {

  return (
    <CSSTransition in={props.state.showSkills} timeout={800} classNames={"fade-in"}>
      <div ref={props.progLangRef} className={classNames(props.state.css_code, "skills-content")}>
        <div className={classNames(props.state.css_code, "skills-title-intro")}>
          <h1>I am well versed in a variety of programming languages, libraries, tools, and technical concepts.</h1>
        </div>
        <CSSTransition in={props.state.skillsSection >= 1} timeout={1000} classNames={"fade-in"}>
          <div className={classNames(props.state.css_code, "skills-hover-intro")}>
            <h1>Hover over a skill to learn more.</h1>
          </div>
        </CSSTransition>
        <CSSTransition in={props.state.skillsSection >= 1} timeout={1000} classNames={"fade-in"}>
          <div className={classNames(props.state.css_code, "skills-first-section")}>
            <div className={classNames(props.state.css_code, "skills-heading")}>
              <hr className={classNames(props.state.css_code, "skills-heading-top-line")}/>
              <h1 className={classNames(props.state.css_code, "skills-heading-title")}>PROGRAMMING LANGUAGES</h1>
              <hr className={classNames(props.state.css_code, "skills-heading-right-line")}/>
            </div>
            <div className={classNames(props.state.css_code, "skills-box-1")} onMouseLeave={() => {props.selectSkill("leave1")}}>
              <div className={classNames(props.state.css_code, "skills-row")}>
                <div onMouseEnter={() => {props.selectSkill("C")}} className={classNames(props.state.css_code, "skills-box", "first", "top-row", props.state.hover[0])} >
                  C
                </div>
                <div onMouseEnter={() => {props.selectSkill("C++")}} className={classNames(props.state.css_code, "skills-box", "top-row", props.state.hover[1])}>
                  C++
                </div>
                <div onMouseEnter={() => {props.selectSkill("Swift")}} className={classNames(props.state.css_code, "skills-box", "top-row", props.state.hover[2])}>
                  Swift
                </div>
                <div onMouseEnter={() => {props.selectSkill("Objective-C")}} className={classNames(props.state.css_code, "skills-box", "top-row", props.state.hover[3])}>
                  Objective-C
                </div>
                <div onMouseEnter={() => {props.selectSkill("R")}} className={classNames(props.state.css_code, "skills-box", "top-row", props.state.hover[4])}>
                  R
                </div>
              </div>
              <div className={classNames(props.state.css_code, "skills-row")}>
                <div ref={props.techConceptsRef} onMouseEnter={() => {props.selectSkill("HTML")}} className={classNames(props.state.css_code, "skills-box", "first", props.state.hover[5])}>
                  HTML
                </div>
                <div onMouseEnter={() => {props.selectSkill("CSS")}} className={classNames(props.state.css_code, "skills-box", props.state.hover[6])}>
                  CSS
                </div>
                <div onMouseEnter={() => {props.selectSkill("C#")}} className={classNames(props.state.css_code, "skills-box", props.state.hover[7])}>
                  C#
                </div>
                <div onMouseEnter={() => {props.selectSkill("Java")}} className={classNames(props.state.css_code, "skills-box", props.state.hover[8])}>
                  Java
                </div>
                <div onMouseEnter={() => {props.selectSkill("Python")}} className={classNames(props.state.css_code, "skills-box", props.state.hover[9])}>
                  Python
                </div>
              </div>
              <div className={classNames(props.state.css_code, "skills-row")}>
                <div onMouseEnter={() => {props.selectSkill("Scheme")}} className={classNames(props.state.css_code, "skills-box", "first-narrow", "bottom-row", props.state.hover[10])}>
                  Scheme
                </div>
                <div onMouseEnter={() => {props.selectSkill("Standard ML")}} className={classNames(props.state.css_code, "skills-box", "bottom-row", props.state.hover[11])}>
                  Standard ML
                </div>
                <div onMouseEnter={() => {props.selectSkill("Ruby")}} className={classNames(props.state.css_code, "skills-box", "bottom-row", props.state.hover[12])}>
                  Ruby
                </div>
                <div onMouseEnter={() => {props.selectSkill("JavaScript")}} className={classNames(props.state.css_code, "skills-box", "bottom-row", props.state.hover[13])}>
                  JavaScript
                </div>
              </div>
            </div>
            <img src={arrow} className={classNames(props.state.css_code, "skills-arrow-1")}></img>
            <div dangerouslySetInnerHTML={{ __html: props.state.skillDescription1 }} className={classNames(props.state.css_code, "skills-descr-1")}>
            </div>
          </div>
        </CSSTransition>
        <CSSTransition in={props.state.skillsSection >= 2} timeout={1000} classNames={"fade-in"}>
          <div className={classNames(props.state.css_code, "skills-second-section")}>
            <div className={classNames(props.state.css_code, "skills-heading")}>
              <hr className={classNames(props.state.css_code, "skills-heading-top-line")}/>
              <h1 className={classNames(props.state.css_code, "skills-heading-title")}>TECHNICAL CONCEPTS</h1>
              <hr className={classNames(props.state.css_code, "skills-heading-right-line")}/>
            </div>
            <div className={classNames(props.state.css_code, "skills-box-2")} onMouseLeave={() => {props.selectSkill("leave2")}}>
              <div className={classNames(props.state.css_code, "skills-row")}>
                <div ref={props.toolsRef} onMouseEnter={() => {props.selectSkill("GUI")}} className={classNames(props.state.css_code, "skills-box", "first", "top-row", props.state.hover[14])}>
                  GUI/UI/UX Design
                </div>
                <div onMouseEnter={() => {props.selectSkill("Algorithms")}} className={classNames(props.state.css_code, "skills-box", "top-row", props.state.hover[15])}>
                  Algorithms
                </div>
              </div>
              <div className={classNames(props.state.css_code, "skills-row")}>
                <div onMouseEnter={() => {props.selectSkill("A/B")}} className={classNames(props.state.css_code, "skills-box", "first", props.state.hover[16])}>
                  A/B Testing
                </div>
                <div onMouseEnter={() => {props.selectSkill("Lambda")}} className={classNames(props.state.css_code, "skills-box", props.state.hover[17])}>
                  Lambda Calculus
                </div>
              </div>
            </div>
            <img src={arrow} className={classNames(props.state.css_code, "skills-arrow-2")}></img>
            <div dangerouslySetInnerHTML={{ __html: props.state.skillDescription2 }} className={classNames(props.state.css_code, "skills-descr-2")}>
            </div>
          </div>
        </CSSTransition>
        <CSSTransition in={props.state.skillsSection >= 3} timeout={1000} classNames={"fade-in"}>
          <div className={classNames(props.state.css_code, "skills-third-section")}>
            <div className={classNames(props.state.css_code, "skills-heading")}>
              <hr className={classNames(props.state.css_code, "skills-heading-top-line")}/>
              <h1 className={classNames(props.state.css_code, "skills-heading-title")}>TOOLS/APPS</h1>
              <hr className={classNames(props.state.css_code, "skills-heading-right-line")}/>
            </div>
            <div className={classNames(props.state.css_code, "skills-box-3")} onMouseLeave={() => {props.selectSkill("leave3")}}>
              <div className={classNames(props.state.css_code, "skills-row")}>
                <div ref={props.librariesRef} onMouseEnter={() => {props.selectSkill("Unity")}} className={classNames(props.state.css_code, "skills-box", "first", "top-row", props.state.hover[18])}>
                  Unity
                </div>
                <div onMouseEnter={() => {props.selectSkill("Tableau")}} className={classNames(props.state.css_code, "skills-box", "top-row", props.state.hover[19])}>
                  Tableau
                </div>
                <div onMouseEnter={() => {props.selectSkill("Jira")}} className={classNames(props.state.css_code, "skills-box", "top-row", props.state.hover[20])}>
                  Jira
                </div>
              </div>
              <div className={classNames(props.state.css_code, "skills-row")}>
                <div onMouseEnter={() => {props.selectSkill("Heroku")}} className={classNames(props.state.css_code, "skills-box", "first", props.state.hover[21])}>
                  Heroku
                </div>
                <div onMouseEnter={() => {props.selectSkill("GitHub")}} className={classNames(props.state.css_code, "skills-box", "bottom-row", props.state.hover[22])}>
                  GitHub
                </div>
                <div onMouseEnter={() => {props.selectSkill("Slack")}} className={classNames(props.state.css_code, "skills-box", "bottom-row", props.state.hover[23])}>
                  Slack
                </div>
              </div>
            </div>
            <img src={arrow} className={classNames(props.state.css_code, "skills-arrow-3")}></img>
            <div dangerouslySetInnerHTML={{ __html: props.state.skillDescription3 }} className={classNames(props.state.css_code, "skills-descr-3")}>
            </div>
          </div>
        </CSSTransition>
        <CSSTransition in={props.state.skillsSection >= 4} timeout={1000} classNames={"fade-in"}>
          <div className={classNames(props.state.css_code, "skills-fourth-section")}>
            <div className={classNames(props.state.css_code, "skills-heading")}>
              <hr className={classNames(props.state.css_code, "skills-heading-top-line")}/>
              <h1 className={classNames(props.state.css_code, "skills-heading-title")}>LIBRARIES</h1>
              <hr className={classNames(props.state.css_code, "skills-heading-right-line")}/>
            </div>
            <div className={classNames(props.state.css_code, "skills-box-4")} onMouseLeave={() => {props.selectSkill("leave4")}}>
              <div className={classNames(props.state.css_code, "skills-row")}>
                <div onMouseEnter={() => {props.selectSkill("React.js")}} className={classNames(props.state.css_code, "skills-box", "first", "top-row", props.state.hover[24])}>
                  React.js
                </div>
                <div onMouseEnter={() => {props.selectSkill("node.js")}} className={classNames(props.state.css_code, "skills-box", "top-row", props.state.hover[25])}>
                  node.js
                </div>
              </div>
              <div className={classNames(props.state.css_code, "skills-row")}>
                <div onMouseEnter={() => {props.selectSkill("d3.js")}} className={classNames(props.state.css_code, "skills-box", "first", "bottom-row", props.state.hover[26])}>
                  d3.js
                </div>
                <div onMouseEnter={() => {props.selectSkill("CocoaPods")}} className={classNames(props.state.css_code, "skills-box", "bottom-row", props.state.hover[27])}>
                  CocoaPods
                </div>
              </div>
            </div>
            <img src={arrow} className={classNames(props.state.css_code, "skills-arrow-4")}></img>
            <div dangerouslySetInnerHTML={{ __html: props.state.skillDescription4 }} className={classNames(props.state.css_code, "skills-descr-4")}>
            </div>
          </div>
        </CSSTransition>
      </div>
    </CSSTransition>);
}

export default Skills;
