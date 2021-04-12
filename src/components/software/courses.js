import React, {useEffect} from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import classNames from 'classnames'

function Courses(props) {

  return (
    <CSSTransition in={props.state.showCourses} timeout={800} classNames={"fade-in"}>
      <div className={classNames(props.state.css_code, "courses-content")}>
       <div className={classNames(props.state.css_code, "courses-title-intro")}>
         <h1>Pursuing a degree in Computer Science at Tufts University has equipped me with in-depth knowledge of technical best practices and experience coding in both high-level and low-level languages.</h1>
       </div>
       <CSSTransition in={props.state.coursesSection >= 1} timeout={1000} classNames={"fade-in"}>
         <div className={classNames(props.state.css_code, "courses-hover-intro")}>
           <h1>Click a skill to learn more and scroll back up to return to courses.</h1>
         </div>
       </CSSTransition>
       <div className={classNames(props.state.css_code, "courses-box")}>
         <CSSTransition in={props.state.coursesRow >= 1} timeout={1000} classNames={"fade-in"}>
           <div className={classNames(props.state.css_code, "courses-row")}>
             <div className={classNames(props.state.css_code, "courses-number")}>
               COMP 11
             </div>
             <div className={classNames(props.state.css_code, "courses-name")}>
               Intro to Computer Science
             </div>
             <div className={classNames(props.state.css_code, "courses-skills-section")}>
               <a onClick={() => {props.scrollToSkill(1, "C++", 1)}} className={classNames(props.state.css_code, "courses-skills-section-skill")}>
                 C++
               </a>
             </div>
           </div>
         </CSSTransition>
         <CSSTransition in={props.state.coursesRow >= 2} timeout={1000} classNames={"fade-in"}>
           <div className={classNames(props.state.css_code, "courses-row")}>
             <div className={classNames(props.state.css_code, "courses-number")}>
               COMP 15
             </div>
             <div className={classNames(props.state.css_code, "courses-name")}>
               Data Structures
             </div>
             <div className={classNames(props.state.css_code, "courses-skills-section")}>
               <a onClick={() => {props.scrollToSkill(2, "Algorithms", 15)}} className={classNames(props.state.css_code, "courses-skills-section-skill")}>
                 Algorithms
               </a>
               <a onClick={() => {props.scrollToSkill(1, "C++", 1)}} className={classNames(props.state.css_code, "courses-skills-section-skill")}>
                 C++
               </a>
             </div>
           </div>
         </CSSTransition>
         <CSSTransition in={props.state.coursesRow >= 3} timeout={1000} classNames={"fade-in"}>
           <div className={classNames(props.state.css_code, "courses-row")}>
             <div className={classNames(props.state.css_code, "courses-number")}>
               COMP 40
             </div>
             <div className={classNames(props.state.css_code, "courses-name")}>
               Machine Level & Assembly-Language Programming
             </div>
             <div className={classNames(props.state.css_code, "courses-skills-section")}>
               <a onClick={() => {props.scrollToSkill(1, "C++", 1)}} className={classNames(props.state.css_code, "courses-skills-section-skill")}>
                 C++
               </a>
               <a onClick={() => {props.scrollToSkill(1, "C", 0)}} className={classNames(props.state.css_code, "courses-skills-section-skill")}>
                 C
               </a>
             </div>
           </div>
         </CSSTransition>
         <CSSTransition in={props.state.coursesRow >= 4} timeout={1000} classNames={"fade-in"}>
           <div className={classNames(props.state.css_code, "courses-row")}>
             <div className={classNames(props.state.css_code, "courses-number")}>
               COMP 105
             </div>
             <div className={classNames(props.state.css_code, "courses-name")}>
               Programming Languages
             </div>
             <div className={classNames(props.state.css_code, "courses-skills-section")}>
               <a onClick={() => {props.scrollToSkill(2, "Lambda", 17)}} className={classNames(props.state.css_code, "courses-skills-section-skill")}>
                 Lambda Calculus
               </a>
               <a onClick={() => {props.scrollToSkill(1, "Ruby", 12)}} className={classNames(props.state.css_code, "courses-skills-section-skill")}>
                 Ruby
               </a>
               <a onClick={() => {props.scrollToSkill(1, "Standard ML", 11)}} className={classNames(props.state.css_code, "courses-skills-section-skill")}>
                 Standard ML
               </a>
               <a onClick={() => {props.scrollToSkill(1, "Scheme", 10)}} className={classNames(props.state.css_code, "courses-skills-section-skill")}>
                 Scheme
               </a>
             </div>
           </div>
         </CSSTransition>
         <CSSTransition in={props.state.coursesRow >= 5} timeout={1000} classNames={"fade-in"}>
           <div className={classNames(props.state.css_code, "courses-row")}>
             <div className={classNames(props.state.css_code, "courses-number")}>
               COMP 160
             </div>
             <div className={classNames(props.state.css_code, "courses-name")}>
               Algorithms
             </div>
             <div className={classNames(props.state.css_code, "courses-skills-section")}>
               <a onClick={() => {props.scrollToSkill(2, "Algorithms", 15)}} className={classNames(props.state.css_code, "courses-skills-section-skill")}>
                 Algorithms
               </a>
             </div>
           </div>
         </CSSTransition>
         <CSSTransition in={props.state.coursesRow >= 6} timeout={1000} classNames={"fade-in"}>
           <div className={classNames(props.state.css_code, "courses-row")}>
             <div className={classNames(props.state.css_code, "courses-number")}>
               COMP 170
             </div>
             <div className={classNames(props.state.css_code, "courses-name")}>
               Computation Theory
             </div>
             <div className={classNames(props.state.css_code, "courses-skills-section")}>
               <a onClick={() => {props.scrollToSkill(2, "Algorithms", 15)}} className={classNames(props.state.css_code, "courses-skills-section-skill")}>
                 Algorithms
               </a>
             </div>
           </div>
         </CSSTransition>
         <CSSTransition in={props.state.coursesRow >= 7} timeout={1000} classNames={"fade-in"}>
           <div className={classNames(props.state.css_code, "courses-row")}>
             <div className={classNames(props.state.css_code, "courses-number")}>
               COMP 20
             </div>
             <div className={classNames(props.state.css_code, "courses-name")}>
               Web Programming
             </div>
             <div className={classNames(props.state.css_code, "courses-skills-section")}>
               <a onClick={() => {props.scrollToSkill(4, "node.js", 25)}} className={classNames(props.state.css_code, "courses-skills-section-skill")}>
                 node.js
               </a>
               <a onClick={() => {props.scrollToSkill(3, "Heroku", 21)}} className={classNames(props.state.css_code, "courses-skills-section-skill")}>
                 Heroku
               </a>
               <a onClick={() => {props.scrollToSkill(3, "GitHub", 22)}} className={classNames(props.state.css_code, "courses-skills-section-skill")}>
                 GitHub
               </a>
               <a onClick={() => {props.scrollToSkill(1, "JavaScript", 13)}} className={classNames(props.state.css_code, "courses-skills-section-skill")}>
                 JavaScript
               </a>
               <a onClick={() => {props.scrollToSkill(1, "CSS", 6)}} className={classNames(props.state.css_code, "courses-skills-section-skill")}>
                 CSS
               </a>
               <a onClick={() => {props.scrollToSkill(1, "HTML", 5)}} className={classNames(props.state.css_code, "courses-skills-section-skill")}>
                 HTML
               </a>
             </div>
           </div>
         </CSSTransition>
         <CSSTransition in={props.state.coursesRow >= 8} timeout={1000} classNames={"fade-in"}>
           <div className={classNames(props.state.css_code, "courses-row")}>
             <div className={classNames(props.state.css_code, "courses-number")}>
               COMP 50
             </div>
             <div className={classNames(props.state.css_code, "courses-name")}>
               Game Design
             </div>
             <div className={classNames(props.state.css_code, "courses-skills-section")}>
               <a onClick={() => {props.scrollToSkill(3, "GitHub", 22)}} className={classNames(props.state.css_code, "courses-skills-section-skill")}>
                 GitHub
               </a>
               <a onClick={() => {props.scrollToSkill(3, "Unity", 18)}} className={classNames(props.state.css_code, "courses-skills-section-skill")}>
                 Unity
               </a>
               <a onClick={() => {props.scrollToSkill(2, "GUI", 14)}} className={classNames(props.state.css_code, "courses-skills-section-skill")}>
                 GUI/UI/UX
               </a>
               <a onClick={() => {props.scrollToSkill(1, "C#", 7)}} className={classNames(props.state.css_code, "courses-skills-section-skill")}>
                 C#
               </a>
             </div>
           </div>
         </CSSTransition>
         <CSSTransition in={props.state.coursesRow >= 9} timeout={1000} classNames={"fade-in"}>
           <div className={classNames(props.state.css_code, "courses-row")}>
             <div className={classNames(props.state.css_code, "courses-number")}>
               COMP 86
             </div>
             <div className={classNames(props.state.css_code, "courses-name")}>
               Object-Oriented Programming for GUI's in Java
             </div>
             <div className={classNames(props.state.css_code, "courses-skills-section")}>
               <a onClick={() => {props.scrollToSkill(4, "node.js", 25)}} className={classNames(props.state.css_code, "courses-skills-section-skill")}>
                 node.js
               </a>
               <a onClick={() => {props.scrollToSkill(3, "GitHub", 22)}} className={classNames(props.state.css_code, "courses-skills-section-skill")}>
                 GitHub
               </a>
               <a onClick={() => {props.scrollToSkill(2, "GUI", 14)}} className={classNames(props.state.css_code, "courses-skills-section-skill")}>
                 GUI/UI/UX
               </a>
               <a onClick={() => {props.scrollToSkill(1, "Java", 8)}} className={classNames(props.state.css_code, "courses-skills-section-skill")}>
                 Java
               </a>
             </div>
           </div>
         </CSSTransition>
         <CSSTransition in={props.state.coursesRow >= 10} timeout={1000} classNames={"fade-in"}>
           <div className={classNames(props.state.css_code, "courses-row", "last")}>
             <div className={classNames(props.state.css_code, "courses-number")}>
               COMP 250
             </div>
             <div className={classNames(props.state.css_code, "courses-name")}>
               Visual Analytics
             </div>
             <div className={classNames(props.state.css_code, "courses-skills-section")}>
               <a onClick={() => {props.scrollToSkill(4, "d3.js", 26)}} className={classNames(props.state.css_code, "courses-skills-section-skill")}>
                 d3.js
               </a>
               <a onClick={() => {props.scrollToSkill(3, "GitHub", 22)}} className={classNames(props.state.css_code, "courses-skills-section-skill")}>
                 GitHub
               </a>
               <a onClick={() => {props.scrollToSkill(3, "Tableau", 19)}} className={classNames(props.state.css_code, "courses-skills-section-skill")}>
                 Tableau
               </a>
               <a onClick={() => {props.scrollToSkill(1, "JavaScript", 13)}} className={classNames(props.state.css_code, "courses-skills-section-skill")}>
                 JavaScript
               </a>
               <a onClick={() => {props.scrollToSkill(1, "Python", 9)}} className={classNames(props.state.css_code, "courses-skills-section-skill")}>
                 Python
               </a>
               <a onClick={() => {props.scrollToSkill(1, "R", 4)}} className={classNames(props.state.css_code, "courses-skills-section-skill")}>
                 R
               </a>
             </div>
           </div>
         </CSSTransition>
       </div>
      </div>
    </CSSTransition>);
}


export default Courses;
