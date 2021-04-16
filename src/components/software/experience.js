import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import classNames from 'classnames'
import nytLogo from './../../assets/images/nyt-logo.png';
import ftLogo from './../../assets/images/ft-logo.png';
import animatic from './../../assets/images/animatic.gif';
import tipsAndTricks from './../../assets/images/tips-and-tricks.gif';
import fitTribe from './../../assets/images/fittribe.gif';
import objcSwift from './../../assets/images/objc-swift.png';

function Experience(props) {
  return (
    <div>
      <CSSTransition in={props.state.showExperience} timeout={800} classNames={"fade-in"}>
        <div className={classNames(props.state.css_code, "experience-content")}>
          <div className={classNames(props.state.css_code, "exp-title-box")}>
            <div className={classNames(props.state.css_code, "exp-title-box-top")}>
              <div className={classNames(props.state.css_code, "exp-title-content")}>
                <img src={nytLogo} className={classNames(props.state.css_code, "exp-title-image")}></img>
                <h1 className={classNames(props.state.css_code, "exp-title-first")}>iOS Engineering Intern</h1>
                <h2>at</h2>
                <h1>the New York Times</h1>
              </div>
            </div>
            <div className={classNames(props.state.css_code, "exp-title-box-bottom")}>
              <div className={classNames(props.state.css_code, "exp-title-content")}>
                <h1>June 2020 - August 2020</h1>
              </div>
            </div>
          </div>
          <div className={classNames(props.state.css_code, "exp-title-intro")}>
            <h1>I Joined the <b>New York Times Games Team</b> as an <b>iOS engineering intern</b>, primarily working on the <b>New York Times Crossword iOS app</b> and furthering my skills in <b>Swift</b> and <b>Objective C</b>.</h1>
          </div>
          <CSSTransition in={props.state.expSection >= 1} timeout={800} classNames={"fade-in"}>
            <div className={classNames(props.state.css_code, "exp-box-content")}>
              <CSSTransition in={props.state.showDescription} timeout={1000} classNames={"fade-in"}>
                <div className={classNames(props.state.css_code, "screen-description")}>
                  iOS implementation of <b>Animatic</b>, a game where players must arrange icons on a film reel to create an animation
                </div>
              </CSSTransition>
              <div className={classNames(props.state.css_code, "exp-large-box")}>
                <div className={classNames(props.state.css_code, "exp-large-box-title")}>
                  <h1>Game Prototyping</h1>
                </div>
                <ul>
                  <li>implemented the <b>iOS version</b> of a new game prototype in <b>Swift</b></li>
                  <li className={classNames(props.state.css_code, "exp-large-box-indent")}>collaborated with five other interns in ideating, play-testing, and designing the game to be added to the Games Team’s portfolio</li>
                  <li className={classNames(props.state.css_code, "exp-large-box-indent")}>features drag and drop mechanics and intuitive animations to create a dynamic user experience</li>
                </ul>
              </div>
              <img src={animatic} className={classNames(props.state.css_code, "exp-iPhone-rec")} onMouseEnter={props.showDescription} onMouseLeave={props.hideDescription}/>
              <a className={classNames(props.state.css_code, "exp-small-box")} href="https://open.nytimes.com/design-prototype-zoom-how-new-york-times-interns-built-a-game-remotely-8b7bff755983" rel="noopener noreferrer" target="_blank">
                <h1>NYT Open Article About the Project</h1>
                <p>written by the interns on the team</p>
              </a>
            </div>
          </CSSTransition>
          <CSSTransition in={props.state.expSection >= 2} timeout={800} classNames={"fade-in"}>
            <div className={classNames(props.state.css_code, "exp-box-content")}>
              <div className={classNames(props.state.css_code, "exp-large-box", "wider")}>
                <div className={classNames(props.state.css_code, "exp-large-box-title")}>
                  <h1>Code Maintenance</h1>
                </div>
                <ul>
                  <li><b>upgraded code</b> from <b>Objective-C</b> to <b>Swift</b> in the Crossword iOS app</li>
                  <li className={classNames(props.state.css_code, "exp-large-box-indent")}>paired with senior engineers to learn <b>best practices</b> for <b>iOS frameworks</b></li>
                  <li className={classNames(props.state.css_code, "exp-large-box-indent")}>wrote and documented exhaustive <b>UI tests</b> for converted code</li>
                </ul>
              </div>
              <img src={objcSwift} className={classNames(props.state.css_code, "objc-swift")}/>
            </div>
          </CSSTransition>
          <CSSTransition in={props.state.expSection >= 3} timeout={800} classNames={"fade-in"}>
            <div className={classNames(props.state.css_code, "exp-box-content")}>
              <div className={classNames(props.state.css_code, "exp-large-box", "widest")}>
                <div className={classNames(props.state.css_code, "exp-large-box-title")}>
                  <h1>Improvements to New User Journey</h1>
                </div>
                <ul>
                  <li>contributed to team goal to <b>boost subscriptions</b> to the Crossword</li>
                  <li className={classNames(props.state.css_code, "exp-large-box-indent")}>paired with back-end engineers to learn principles of <b>A/B Testing</b></li>
                  <li className={classNames(props.state.css_code, "exp-large-box-indent")}>with a product designer, brainstormed and designed an interactive section in<br/>the app that <b>teaches the iOS Crossword app</b> to new users</li>
                  <li className={classNames(props.state.css_code, "exp-large-box-indent")}><b>shipped a prototype</b> of the section and presented it to the team</li>
                </ul>
              </div>
              <img src={tipsAndTricks} className={classNames(props.state.css_code, "exp-iPhone-rec-big")}/>
              <div className={classNames(props.state.css_code, "screen-description-2")}>
                Working prototype of a <b>Tips and Tricks</b> menu that teaches the Crossword (Implemented in Swift)
              </div>
            </div>
          </CSSTransition>
        </div>
      </CSSTransition>
      <CSSTransition in={props.state.expSection >= 4 && props.state.showExperience} timeout={1000} classNames={"fade-in"}>
        <div className={classNames(props.state.css_code, "experience-content-2")}>
          <div className={classNames(props.state.css_code, "exp-title-box")}>
            <div className={classNames(props.state.css_code, "exp-title-box-top")}>
              <div className={classNames(props.state.css_code, "exp-title-content")}>
                <img src={ftLogo} className={classNames(props.state.css_code, "exp-title-image-2")}></img>
                <h1 className={classNames(props.state.css_code, "exp-title-first")}>Software Engineering Intern</h1>
                <h2>at startup</h2>
                <h1>FitTribe</h1>
              </div>
            </div>
            <div className={classNames(props.state.css_code, "exp-title-box-bottom")}>
              <div className={classNames(props.state.css_code, "exp-title-content")}>
                <h1>May 2019 - August 2019</h1>
              </div>
            </div>
          </div>
          <div className={classNames(props.state.css_code, "exp-title-intro")}>
            <h1>I Joined the startup <b>FitTribe</b> as a full-stack <b>software engineering intern</b> and assisted in developing a <b>competitive healthy-eating app</b> in <b>Swift</b>.</h1>
          </div>
          <CSSTransition in={props.state.expSection >= 5} timeout={800} classNames={"fade-in"}>
            <div className={classNames(props.state.css_code, "exp-box-content")}>
              <div className={classNames(props.state.css_code, "exp-large-box")}>
                <div className={classNames(props.state.css_code, "exp-large-box-title")}>
                  <h1>Full-Stack Development</h1>
                </div>
                <ul>
                  <li>the app allows users to challenge friends in monthly games to eat healthy</li>
                  <li>leveraged collaborative, agile software development</li>
                  <li>utilized the CocoaPods framework and several of its libraries</li>
                  <li>connected front-end interfaces to a back-end web app</li>
                  <li>modified default iOS controllers to implement a custom image picker and dynamic alert views usable throughout the app</li>
                  <li>learned machine learning algorithms for food recognition using bite.ai</li>
                </ul>
              </div>
              <img src={fitTribe} className={classNames(props.state.css_code, "exp-iPhone-rec-2")}/>
            </div>
          </CSSTransition>
        </div>
      </CSSTransition>
    </div>
  );
}

export default Experience;
