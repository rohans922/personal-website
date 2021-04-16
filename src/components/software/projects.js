import React, {useEffect} from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import classNames from 'classnames'
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';
import thumbSeize from './../../assets/images/thumbnails/seize-the-seas-demo.png'
import thumb2DGame from './../../assets/images/thumbnails/2d-game-demo.png'
import thumb2DSimulator from './../../assets/images/thumbnails/2d-simulator-demo.png'
import thumb2048 from './../../assets/images/thumbnails/2048-demo.png'
import thumbVAST from './../../assets/images/thumbnails/VAST-demo.png'

function Projects(props) {

  return (
    <div>
      <CSSTransition in={props.state.showProjects} timeout={800} classNames={"fade-in"}>
        <div className={classNames(props.state.css_code, "projects-content")}>
          <div className={classNames(props.state.css_code, "projects-title-box")}>
            <div className={classNames(props.state.css_code, "projects-title-box-top")}>
              <div className={classNames(props.state.css_code, "projects-title-content")}>
                <h1>Seize the Seas - A Multiplayer Game</h1>
              </div>
            </div>
            <div className={classNames(props.state.css_code, "projects-title-box-bottom")}>
              <div className={classNames(props.state.css_code, "projects-title-content")}>
                <h1>Coded a first-person, 3D multiplayer game in Unity where players defend their island and race to collect trash floating in the sea</h1>
              </div>
            </div>
          </div>
          <div className={classNames(props.state.css_code, "projects-info")}>
            <h1>
              KEY FEATURES
            </h1>
            <ul>
              <li>
                Implemented using C# scripts and playable with X-Box controllers
              </li>
              <li>
                Created and coded custom sound effects, custom models, and custom physics engines
              </li>
            </ul>
          </div>
          <div>
            <ReactPlayer ref={props.videoZeroRef} playing={props.state.playing[0]} onStart={() => {props.stopOtherVids(0)}} onPlay={() => {props.setVidPlaying(0, true)}} className={classNames(props.state.css_code, "projects-video")} url={'videos/seize-the-seas-demo.mp4'} width="780" light={thumbSeize} controls={true}/>
          </div>
          <div onMouseLeave={() => {props.setDownloadHover("")}} className={classNames(props.state.css_code, "projects-video-links")}>
            <a onClick={() => props.setVidPlaying(0, false)} href="https://github.com/rohans922/seize-the-seas" rel="noopener noreferrer" target="_blank" onMouseEnter={() => {props.setDownloadHover("")}} className={classNames(props.state.css_code, "projects-video-link")}>
              GitHub
            </a>
            <div onMouseEnter={() => {props.setDownloadHover("hover")}} className={classNames(props.state.css_code, "projects-video-link", "last", props.state.downloadHover)}>
              Download
            </div>
            <div className={classNames(props.state.css_code, "projects-download-links", props.state.downloadHover)}>
              <a onClick={() => props.setVidPlaying(0, false)} href="https://drive.google.com/file/d/1E3jKm7mmV4Y9MhLLR-Z_AiJ7L9UGEq4A/view" rel="noopener noreferrer" target="_blank" className={classNames(props.state.css_code, "projects-download-link")}>
                Windows
              </a>
              <a onClick={() => props.setVidPlaying(0, false)} href="https://drive.google.com/file/d/1eOktYFoGQd_UxnJNtd1bIY7p0279TIm0/view" rel="noopener noreferrer" target="_blank" className={classNames(props.state.css_code, "projects-download-link", "last")}>
                Mac
              </a>
            </div>
          </div>
        </div>
      </CSSTransition>
      <CSSTransition in={props.state.projectsSection >= 2} timeout={800} classNames={"fade-in"}>
        <div className={classNames(props.state.css_code, "projects-content")}>
          <div className={classNames(props.state.css_code, "projects-title-box")}>
            <div className={classNames(props.state.css_code, "projects-title-box-top")}>
              <div className={classNames(props.state.css_code, "projects-title-content")}>
                <h1>Simulators and GUIs in Java and C++</h1>
              </div>
            </div>
            <div className={classNames(props.state.css_code, "projects-title-box-bottom")}>
              <div className={classNames(props.state.css_code, "projects-title-content")}>
                <h1>Devloped simulators using principles of object-oriented programming, modularity, and GUI design<i> - (Use the arrows to navigate)</i></h1>
              </div>
            </div>
          </div>
          <div className={classNames(props.state.css_code, "projects-info")}>
            <h1>
              {props.state.videoSliderInfoHeading} KEY FEATURES
            </h1>
            <ul>
              <li>
                {props.state.projectsBullet1}
              </li>
              <li>
                {props.state.projectsBullet2}
              </li>
            </ul>
          </div>
          <div className={classNames(props.state.css_code, "projects-videos-slider")}>
            <div className={classNames(props.state.css_code, "projects-video-slider-arrows")}>
              <div className={classNames(props.state.css_code, "projects-video-slider-arrow", "l", props.state.grayLeft)} onClick={() => {props.moveVideo(1); props.stopOtherVids(-1);}}>
                <i className="fas fa-chevron-left" aria-hidden="true" />
              </div>
              <div className={classNames(props.state.css_code, "projects-video-slider-arrow", "r", props.state.grayRight)} onClick={() => {props.moveVideo(-1); props.stopOtherVids(-1);}}>
                <i className="fas fa-chevron-right" aria-hidden="true" />
              </div>
            </div>
            <div className={classNames(props.state.css_code, "projects-video-container", props.state.videoSliderIndex[0])}>
              <div>
                <div className={classNames(props.state.css_code, "projects-video-overlay", props.state.videoHideControls[0])}/>
                <ReactPlayer ref={props.videoOneRef} playing={props.state.playing[1]} onStart={() => {props.stopOtherVids(1)}} onPlay={() => {props.setVidPlaying(1, true)}} className={classNames(props.state.css_code, "projects-video")} url={'videos/2d-game-demo.mp4'} width="780" light={thumb2DGame} controls={true}/>
              </div>
              <div className={classNames(props.state.css_code, "projects-video-links")}>
                <a onClick={() => props.setVidPlaying(1, false)} href="https://github.com/rohans922/taxi-racer-2D-game" rel="noopener noreferrer" target="_blank" className={classNames(props.state.css_code, "projects-video-link", "wide")}>
                  GitHub
                </a>
              </div>
            </div>
            <div className={classNames(props.state.css_code, "projects-video-container", props.state.videoSliderIndex[1])}>
              <div>
                <div className={classNames(props.state.css_code, "projects-video-overlay", props.state.videoHideControls[1])}/>
                <ReactPlayer ref={props.videoTwoRef} playing={props.state.playing[2]} onStart={() => {props.stopOtherVids(2)}} onPlay={() => {props.setVidPlaying(2, true)}} className={classNames(props.state.css_code, "projects-video")} url={'videos/2d-simulator-demo.mp4'} width="780" light={thumb2DSimulator} controls={true}/>
              </div>
              <div className={classNames(props.state.css_code, "projects-video-links")}>
                <a onClick={() => props.setVidPlaying(2, false)} href="https://github.com/rohans922/traffic-2D-simulator" rel="noopener noreferrer" target="_blank" className={classNames(props.state.css_code, "projects-video-link", "wide")}>
                  GitHub
                </a>
              </div>
            </div>
            <div className={classNames(props.state.css_code, "projects-video-container", props.state.videoSliderIndex[2])}>
              <div>
                <div className={classNames(props.state.css_code, "projects-video-overlay", props.state.videoHideControls[2])}/>
                <ReactPlayer ref={props.videoThreeRef} playing={props.state.playing[3]} onStart={() => {props.stopOtherVids(3)}} onPlay={() => {props.setVidPlaying(3, true)}} className={classNames(props.state.css_code, "projects-video")} url={'videos/2048-demo.mp4'} width="780" light={thumb2048} controls={true}/>
              </div>
            </div>
          </div>
        </div>
      </CSSTransition>
      <CSSTransition in={props.state.projectsSection >= 3} timeout={800} classNames={"fade-in"}>
        <div className={classNames(props.state.css_code, "projects-content")}>
          <div className={classNames(props.state.css_code, "projects-title-box")}>
            <div className={classNames(props.state.css_code, "projects-title-box-top")}>
              <div className={classNames(props.state.css_code, "projects-title-content")}>
                <h1>Analyzing and Visualizing Tweets in JavaScript</h1>
              </div>
            </div>
            <div className={classNames(props.state.css_code, "projects-title-box-bottom")}>
              <div className={classNames(props.state.css_code, "projects-title-content", "narrow")}>
                <h1>A team effort at tackling the 2019 MC3 Visual Analytics Science and Technology Challenge</h1>
              </div>
            </div>
          </div>
          <div className={classNames(props.state.css_code, "projects-info")}>
            <h1>
              KEY FEATURES
            </h1>
            <ul>
              <li>
                Created a visual tool to aid city officials in allocating resources after an earthquake
              </li>
              <li>
                Employs natural language processing and sentiment analyses to process and filter data
              </li>
            </ul>
          </div>
          <div>
            <ReactPlayer ref={props.videoFourRef} playing={props.state.playing[4]} onStart={() => {props.stopOtherVids(4)}} onPlay={() => {props.setVidPlaying(4, true)}} className={classNames(props.state.css_code, "projects-video")} url={'videos/VAST-demo.mp4'} width="780" light={thumbVAST} controls={true}/>
          </div>
          <div className={classNames(props.state.css_code, "projects-video-links")}>
            <a onClick={() => props.setVidPlaying(3, false)} href="https://taniavalrani.github.io/socialMedia_NLP/index.html" rel="noopener noreferrer" target="_blank" className={classNames(props.state.css_code, "projects-video-link", "wide")}>
              Website (Requires Google Chrome)
            </a>
          </div>
        </div>
      </CSSTransition>
      <CSSTransition in={props.state.projectsSection >= 4} timeout={800} classNames={"fade-in"}>
        <div className={classNames(props.state.css_code, "projects-content")}>
          <div className={classNames(props.state.css_code, "projects-title-box")}>
            <div className={classNames(props.state.css_code, "projects-title-box-top")}>
              <div className={classNames(props.state.css_code, "projects-title-content")}>
                <h1>This Website</h1>
              </div>
            </div>
            <div className={classNames(props.state.css_code, "projects-title-box-bottom")}>
              <div className={classNames(props.state.css_code, "projects-title-content")}>
                <h1>Designed, developed, and deployed a website from scratch in JavaScript, CSS, and HTML using the React.js framework</h1>
              </div>
            </div>
          </div>
          <Link className={classNames(props.state.css_code, "projects-website-link")} to="/about-this-site">
            <div className={classNames(props.state.css_code, "projects-website-box")}>
              <i class="fas fa-chevron-right"></i>
              <h1>
                Click here to learn more about how this website was made
              </h1>
            </div>
          </Link>
        </div>
      </CSSTransition>
    </div>);
}

export default Projects;
