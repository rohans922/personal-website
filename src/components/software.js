import React, { Component} from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import classNames from 'classnames'
import Intro from './software/intro';
import Experience from './software/experience';
import Navigation from './software/navigation';
import Courses from './software/courses';
import Skills from './software/skills';
import selectSkill from './software/skills';
import ReactPlayer from 'react-player';
import seizeThumb from './../assets/images/seize-thumb.png'

class Software extends Component {
  constructor() {
      super();
    this.state = {
      load: false,
      css_code: "se",
      prevSection: "-1",
      section: "0",
      prevSectionDir: "-1",
      directionPrefix: "",
      expSection: 0,
      coursesSection: 0,
      coursesRow: 0,
      skillsSection: 0,
      projectsSection: 0,
      move: false,
      moveAnimate: false,
      showIntro: false,
      showImage1: false,
      showImage2: false,
      showImage3: false,
      showImages: true,
      showBlack: false,
      showDescription: false,
      showExperience: false,
      showCourses: false,
      showSkills: false,
      showProjects: false,
      showBox: false,
      scrollUp: false,
      selectedSkill: "0",
      hover: [],
      downloadHover: "",
      scrolled: false,
      skillDescription1: "",
      skillDescription2: "",
      skillDescription3: "",
      skillDescription4: "",
      videoPlayerRefs: [],
      playing: new Array(10).fill(true)
    };

    this.progLangRef = React.createRef();
    this.techConceptsRef = React.createRef();
    this.toolsRef = React.createRef();
    this.librariesRef = React.createRef();

    this.videoOneRef = React.createRef();
    this.videoTwoRef = React.createRef();
    this.videoThreeRef = React.createRef();


    this.update = this.update.bind(this);
    this.incrementCourse = this.incrementCourse.bind(this);
    this.selectSkill = this.selectSkill.bind(this);
    this.setDescription = this.setDescription.bind(this);
    this.scrollToSkill = this.scrollToSkill.bind(this);
    this.stopOtherVids = this.stopOtherVids.bind(this);
    this.setVidPlaying = this.setVidPlaying.bind(this);
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
    this.selectSkill("Reset")
    this.setState({videoPlayerRefs: [this.videoOneRef, this.videoTwoRef, this.videoThreeRef]})
  }

  componentDidUpdate(nextProps) {
    const { scrollLoc } = this.props
    if (nextProps.scrollLoc !== scrollLoc) {
      this.update(nextProps.scrollLoc, scrollLoc)
    }
  }

  update(scrollLoc, oldLoc) {
    console.log(this.state.section, this.state.prevSection)
    console.log(scrollLoc)
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
    if (scrollLoc < 1100) {
      this.setState({showExperience: false})
    }
    if (scrollLoc > 1100 && scrollLoc < 3800) {
      this.setState({showExperience: true})
    }
    if (scrollLoc < 1180) {
      this.setState({expSection: 0})
    }
    if (scrollLoc > 1180 && scrollLoc < 1480) {
      this.setState({expSection: 1})
    }
    if (scrollLoc >= 1480 && scrollLoc < 1730) {
      this.setState({expSection: 2})
    }
    if (scrollLoc >= 1730 && scrollLoc < 2460) {
      this.setState({expSection: 3})
    }
    if (scrollLoc >= 2800 && scrollLoc < 3050) {
      this.setState({expSection: 4})
    }
    if (scrollLoc >= 3050) {
      this.setState({expSection: 5})
    }
    if (scrollLoc < 3600) {
      this.setState({coursesSection: 0})
      this.setState({coursesRow: 0})
    }
    if (scrollLoc >= 3800 & scrollLoc < 3950) {
      if (this.state.coursesSection == 0) {
        this.incrementCourse(0)
      }
      this.setState({coursesSection: 1, showExperience: false})
    }
    if (scrollLoc > 3600 && scrollLoc < 4600) {
      this.setState({skillsSection: 0, showCourses: true})
    }
    if (scrollLoc >= 4700 && scrollLoc < 4830) {
      this.setState({skillsSection: 1, showCourses: false})
    }
    if (scrollLoc >= 4830 && scrollLoc < 5080) {
      this.setState({skillsSection: 2})
    }
    if (scrollLoc >= 5080 && scrollLoc < 5430) {
      this.setState({skillsSection: 3})
    }
    if (scrollLoc >= 5430 && scrollLoc < 5580) {
      this.setState({skillsSection: 4})
    }
    if (scrollLoc > 5800 && scrollLoc < 6300) {
      this.setState({projectsSection: 0, showSkills: true})
      this.stopOtherVids(-1);
    }
    if (scrollLoc > 6300 && scrollLoc < 6500) {
      this.setState({projectsSection: 1, showSkills: false})
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
    if (this.state.section != "1" && scrollLoc > 1000 && scrollLoc < 3600) {
      this.setState({moveAnimate: false, showCourses: false})
      setTimeout(() => {
        this.setState({prevSection: this.state.section, prevSectionDir: this.state.directionPrefix + this.state.section})
        this.setState({section: "1", move: true, moveAnimate: true})
      }, 2);
    }
    if (this.state.section != "2" && scrollLoc > 3600 && scrollLoc < 4350) {
      this.setState({moveAnimate: false, showSkills: false})
      setTimeout(() => {
        this.setState({prevSection: this.state.section, prevSectionDir: this.state.directionPrefix + this.state.section})
        this.setState({section: "2", move: true, moveAnimate: true})
      }, 2);
      setTimeout(() => {
        this.setState({showCourses: true})
      }, 500);
    }
    if (this.state.section != "3" && scrollLoc > 4350 && scrollLoc < 5700) {
      this.setState({moveAnimate: false, showProjects: false})
      setTimeout(() => {
        this.setState({prevSection: this.state.section, prevSectionDir: this.state.directionPrefix + this.state.section})
        this.setState({section: "3", move: true, moveAnimate: true})
      }, 2);
      setTimeout(() => {
        this.setState({showSkills: true})
      }, 500);
    }
    if (this.state.section != "4" && scrollLoc > 5700 && scrollLoc < 7000) {
      this.setState({moveAnimate: false})
      setTimeout(() => {
        this.setState({prevSection: this.state.section, prevSectionDir: this.state.directionPrefix + this.state.section})
        this.setState({section: "4", move: true, moveAnimate: true})
      }, 2);
      setTimeout(() => {
        this.setState({showProjects: true})
      }, 500);
    }
    if (this.state.section != "5" && scrollLoc > 7000) {
      this.setState({moveAnimate: false})
      setTimeout(() => {
        this.setState({prevSection: "4", prevSectionDir: this.state.directionPrefix + "4"})
        this.setState({section: "5", move: true, moveAnimate: true})
      }, 2);
    }

    setTimeout(() => {
      if (this.state.move) {
        console.log("Moved")
        this.setState({move: false});
      }
    }, 100);
  }

  incrementCourse(i) {
    setTimeout(() => {
      this.setState({coursesRow: i})
      i++;
      if (i < 11) {
        this.incrementCourse(i);
      }
    }, (90));
  }

  selectSkill(skill) {
    this.setState({hover: []})
    console.log("SELECTING", skill)
    if (this.state.scrolled) {
      this.setState({scrolled: false})
      this.setDescription(1, "Hover over a skill to learn more.<span style=\"color:gray;\">&#9608;</span>")
      this.setDescription(2, "Hover over a skill to learn more.<span style=\"color:gray;\">&#9608;</span>")
      this.setDescription(3, "Hover over a skill to learn more.<span style=\"color:gray;\">&#9608;</span>")
      this.setDescription(4, "Hover over a skill to learn more.<span style=\"color:gray;\">&#9608;</span>")
    }
    this.setState({selectedSkill: skill})
    switch(skill) {
      case "C":
        this.setDescription(1, "After taking a course at Tufts on Machine Structure and Assembly-Language programming, I gained experience coding in <b>C</b>, and through practicing concepts like locality and writing machine instructions, I was able to use this knowledge to write clean, efficient code and understand computation at the machine level.")
        break;
      case "C++":
        this.setDescription(1, "Through taking courses like Data Structures and Algorithms, I have gained proficiency developing in <b>C++</b> using objects and classes, inputting and outputting data into files, creating and manipulating data structures, and developing polymorphic code to tackle large problems and create efficient and testable code.")
        break;
      case "Swift":
        this.setDescription(1, "I have several years of experience coding in <b>Swift</b> both as a hobby and during two summer internships. I’ve developed an iOS app from the ground up, prototyped a game in Swift with asynchronous animations, upgraded Objective-C code to Swift, and deployed an app update to the App Store.")
        break;
      case "Objective-C":
        this.setDescription(1, "At The New York Times, I gained experience reading and understanding <b>Objective-C</b> code in an established codebase. In the iOS Crossword app, I upgraded View Controllers written in Objective-C to Swift and pushed an update to the App Store.")
        break;
      case "R":
        this.setDescription(1, "In a course at Tufts on visualizing and analyzing data, I used <b>R</b> and RStudio to input datasets and perform tasks such as creating variables, filtering and subsetting data, graphing and plotting data, and manipulating vectors and matrices. The course focussed on analyzing large datasets and creating interfaces to easily visualize important aspects.")
        break;
      case "HTML":
        this.setDescription(1, "I have experience in web development and coding in <b>HTML</b> through taking courses at Tufts such as Web Programming, Computer Security, and Visual Analytics. I furthered my skills through independently learning React.js. To read more about how I created this website using HTML, see the projects section below.")
        break;
      case "CSS":
        this.setDescription(1, "I have experience in web development and coding in <b>CSS</b> through taking courses at Tufts. I have also used CSS properties, media queries, and CSS Animations to create dynamic websites that are also mobile compatible. To read more about how I created this website with CSS, see the projects section below.")
        break;
      case "C#":
        this.setDescription(1, "Through developing a 3D multiplayer game in Unity, I gained experience scripting in <b>C#</b>. I developed game mechanics such as a physics engine for walking on land and swimming through water and a system to receive player input through x-box controllers. To read more about how I created this game, see the projects section below.")
        break;
      case "Java":
        this.setDescription(1, "After taking a course at Tufts on object-oriented programming for GUI’s in <b>Java</b>, I became proficient at using libraries such as java.awt, java.io, and java.swing while employing principles like modularity and inheritance to create simulators with interactive interfaces.")
        break;
      case "Python":
        this.setDescription(1, "I have experience creating basic scripts in <b>Python</b> and have used it in classes such as Computer Security and Visual Analytics to analyze PCAP files and execute sentiment analyses on datasets.")
        break;
      case "Scheme":
        this.setDescription(1, "In a class at Tufts on programming languages, I learned and practiced principles of functional programming. In <b>Scheme</b>, I became proficient at using algebraic laws to recursively process lists of information and using proofs by induction to show the correctness of the laws.")
        break;
      case "Standard ML":
        this.setDescription(1, "In a class at Tufts on programming languages, I learned and practiced principles of functional programming. In <b>Standard ML</b>, I became proficient at using algebraic laws to perform type checking on a simplified version of Ruby and create an interpreter to process and execute the code.")
        break;
      case "Ruby":
        this.setDescription(1, "In a class at Tufts on programming languages, I learned and practiced principles of object-oriented programming by creating a simulation of the Boston train system in <b>Ruby</b> and using breadth-first-search to determine the shortest paths for multiple passenger’s trips.")
        break;
      case "JavaScript":
        this.setDescription(1, "I have experience in web development and coding in <b>JavaScript</b> through taking courses at Tufts such as Web Programming, Computer Security, and Visual Analytics, and I have furthered my skills by using libraries like React.js, node.js, and d3.js. To read more about projects I’ve completed in JavaScript, see the projects section below.")
        break;
      case "leave1":
        this.setDescription(1, "Hover over a skill to learn more.<span style=\"color:gray;\">&#9608;</span>")
        break;
      case "GUI":
        this.setDescription(2, "Having taken a graphic design and <b>GUI</b> class at Tufts and also majoring in Film, I have developed an eye for aesthetic details and have experience using tools like Figma. I designed the <b>UI</b> for this website and other independent projects which can be seen in the projects section below.")
        break;
      case "Algorithms":
        this.setDescription(2, "I am well versed in implementing <b>algorithms</b> for several data structures including graphs, linked lists, trees, and arrays, and having taken an algorithms class at Tufts, I’ve learned how to mathematically prove their time and space complexities and apply those optimizations to real world situations.")
        break;
      case "A/B":
        this.setDescription(2, "At The New York Times, I learned the principles of <b>A/B testing</b> while developing a prototype for a new section of the Crossword app. Working with back-end developers, I learned how the NYT’s custom A/B testing system is implemented and how it can assist in assessing a new feature.")
        break;
      case "Lambda":
        this.setDescription(2, "In a programming languages class at Tufts, I learned and practiced principles of <b>lambda calculus</b>. We performed reductions and substitutions with bound and free variables, and learned how to implement that in Scheme.")
        break;
      case "leave2":
        this.setDescription(2, "Hover over a skill to learn more.<span style=\"color:gray;\">&#9608;</span>")
        break;
      case "Unity":
        this.setDescription(3, "In a Game Design class at Tufts, I gained proficiency using the <b>Unity</b> Game Engine to design playable 2D and 3D games. I coded a multiplayer game with custom physics, 3D models, first-person gameplay, X-Box controller compatibility, and custom sounds. To read more about this project, see the projects section below.")
        break;
      case "Tableau":
        this.setDescription(3, "In a Visual Analytics class at Tufts that focussed on analyzing, filtering, and visualizing data, I gained proficiency using <b>Tableau</b> to parse, filter, and visualize data.")
        break;
      case "Jira":
        this.setDescription(3, "Jira")
        break;
      case "Heroku":
        this.setDescription(3, "Heroku")
        break;
      case "GitHub":
        this.setDescription(3, "GitHub")
        break;
      case "Slack":
        this.setDescription(3, "Slack")
        break;
      case "leave3":
        this.setDescription(3, "Hover over a skill to learn more.<span style=\"color:gray;\">&#9608;</span>")
        break;
      case "React.js":
        this.setDescription(4, "React.js")
        break;
      case "node.js":
        this.setDescription(4, "node.js")
        break;
      case "d3.js":
        this.setDescription(4, "d3.js")
        break;
      case "CocoaPods":
        this.setDescription(4, "CocoaPods")
        break;
      case "leave4":
        this.setDescription(4, "Hover over a skill to learn more.<span style=\"color:gray;\">&#9608;</span>")
        break;
      default:
        this.setDescription(1, "Hover over a skill to learn more.<span style=\"color:gray;\">&#9608;</span>")
        this.setDescription(2, "Hover over a skill to learn more.<span style=\"color:gray;\">&#9608;</span>")
        this.setDescription(3, "Hover over a skill to learn more.<span style=\"color:gray;\">&#9608;</span>")
        this.setDescription(4, "Hover over a skill to learn more.<span style=\"color:gray;\">&#9608;</span>")
    }
  }

  setDescription(num, descr) {
    switch (num) {
      case 1:
        this.setState({skillDescription1: descr})
        break;
      case 2:
        this.setState({skillDescription2: descr})
        break;
      case 3:
        this.setState({skillDescription3: descr})
        break;
      case 4:
        this.setState({skillDescription4: descr})
        break;
      default:
        break;
    }
  }

  scrollToSkill(section, skill, skillIndex) {
    switch (section) {
      case 1:
        this.progLangRef.current.scrollIntoView({behavior: 'smooth'});
        break;
      case 2:
        this.techConceptsRef.current.scrollIntoView({behavior: 'smooth'});
        break;
      case 3:
        this.toolsRef.current.scrollIntoView({behavior: 'smooth'});
        break;
      case 4:
        this.librariesRef.current.scrollIntoView({behavior: 'smooth'});
        break;
      default:
        break;
    }
    this.selectSkill("reset");
    this.selectSkill(skill);
    this.setState({scrolled: true});
    let newHover = []
    newHover[skillIndex] = "hover";
    this.setState({hover: newHover})
  }

  stopOtherVids(current) {
    this.state.videoPlayerRefs.forEach(function (item, index) {
      if (index != current) {
        if (item.current) {
          let playing = this.state.playing.slice();
          playing[index] = true;
          this.setState({playing: playing});
          item.current.seekTo(0, 'seconds');
          item.current.showPreview();
        }
      }
    }, this);
  }

  setVidPlaying(index, value) {
    let playing = this.state.playing.slice();
    playing[index] = value;
    this.setState({playing: playing});
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
                <Intro state={this.state}/>
                <Experience state={this.state} showBlack={() => {this.setState({showBlack: true}); setTimeout(() => {this.setState({showDescription: true});}, 200);}} hideBlack={() => {this.setState({showDescription: false}); setTimeout(() => {this.setState({showBlack: false});}, 200);}}/>
                <Courses state={this.state} scrollToSkill={this.scrollToSkill}/>
                <Skills progLangRef={this.progLangRef} techConceptsRef={this.techConceptsRef} toolsRef={this.toolsRef} librariesRef={this.librariesRef} state={this.state} selectSkill={this.selectSkill}/>
                <CSSTransition in={this.state.showProjects} timeout={800} classNames={"fade-in"}>
                  <div className={classNames(this.state.css_code, "projects-content")}>
                    <div className={classNames(this.state.css_code, "projects-title-box")}>
                      <div className={classNames(this.state.css_code, "projects-title-box-top")}>
                        <div className={classNames(this.state.css_code, "projects-title-content")}>
                          <h1>Seize the Seas</h1>
                          <h2> - A Multiplayer Game</h2>
                        </div>
                      </div>
                      <div className={classNames(this.state.css_code, "projects-title-box-bottom")}>
                        <div className={classNames(this.state.css_code, "projects-title-content")}>
                          <h1>Coded a first-person, 3D multiplayer game in Unity where players defend their island and race to collect trash floating in the sea.</h1>
                        </div>
                      </div>
                    </div>
                    <div className={classNames(this.state.css_code, "projects-info")}>
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
                      <ReactPlayer ref={this.videoOneRef} playing={this.state.playing[0]} onStart={() => {this.stopOtherVids(0)}} onPlay={() => {this.setVidPlaying(0, true)}} className={classNames(this.state.css_code, "projects-video")} url={'videos/seize-the-seas-gameplay.mp4'} width="780" light={seizeThumb} controls={true}/>
                    </div>
                    <div onMouseLeave={() => {this.setState({downloadHover: ""})}} className={classNames(this.state.css_code, "projects-video-links")}>
                      <a onClick={() => this.setVidPlaying(0, false)} href="https://github.com/rohans922/seize-the-seas" rel="noopener noreferrer" target="_blank" onMouseEnter={() => {this.setState({downloadHover: ""})}} className={classNames(this.state.css_code, "projects-video-link")}>
                        GitHub
                      </a>
                      <div onMouseEnter={() => {this.setState({downloadHover: "hover"})}} className={classNames(this.state.css_code, "projects-video-link", "last", this.state.downloadHover)}>
                        Download
                      </div>
                      <div className={classNames(this.state.css_code, "projects-download-links", this.state.downloadHover)}>
                        <a onClick={() => this.setVidPlaying(0, false)} href="https://drive.google.com/file/d/1E3jKm7mmV4Y9MhLLR-Z_AiJ7L9UGEq4A/view" rel="noopener noreferrer" target="_blank" className={classNames(this.state.css_code, "projects-download-link")}>
                          Windows
                        </a>
                        <a onClick={() => this.setVidPlaying(0, false)} href="https://drive.google.com/file/d/1eOktYFoGQd_UxnJNtd1bIY7p0279TIm0/view" rel="noopener noreferrer" target="_blank" className={classNames(this.state.css_code, "projects-download-link", "last")}>
                          Mac
                        </a>
                      </div>
                    </div>
                  </div>
                </CSSTransition>
                <Navigation state={this.state}/>
            </div>
          </CSSTransition>
        </div>
      </div>
    );
  }
}

export default Software;
