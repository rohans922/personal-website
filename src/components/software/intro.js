import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import classNames from 'classnames'
import image1 from './../../assets/images/image-1.svg';
import image2 from './../../assets/images/image-2.svg';
import image3 from './../../assets/images/image-3.svg';

function Intro(props) {
  return (
    <CSSTransition in={props.state.showIntro} timeout={1000} classNames={"fade-out"}>
      <div className={classNames(props.state.css_code, "intro-content")}>
        <CSSTransition in={props.state.showImages} timeout={1000} classNames={"fade-in"}>
        <div>
          <CSSTransition in={props.state.showImage1} timeout={1000} classNames={"fade-in"}>
            <img src={image1} className={classNames(props.state.css_code, "intro-image-1")}></img>
          </CSSTransition>
          <CSSTransition in={props.state.showImage2} timeout={1000} classNames={"fade-in"}>
            <img src={image2} className={classNames(props.state.css_code, "intro-image-2")}></img>
          </CSSTransition>
          <CSSTransition in={props.state.showImage3} timeout={1000} classNames={"fade-in"}>
            <img src={image3} className={classNames(props.state.css_code, "intro-image-3")}></img>
          </CSSTransition>
        </div>
        </CSSTransition>
        <div className={classNames(props.state.css_code, "intro-gap")}></div>
        <CSSTransition in={props.state.showBox} timeout={1000} classNames={"fade-in"}>
          <div className={classNames(props.state.css_code, "intro-box")}>I recently graduated Tufts University with a B.S. in Computer Science and hope to pursue a career as a software engineer.</div>
        </CSSTransition>
        <div className={classNames(props.state.css_code, "intro-box")}></div>
      </div>
    </CSSTransition>);
}

export default Intro;
