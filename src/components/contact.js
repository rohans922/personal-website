import React, { Component} from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

class Contact extends Component {
   render() {
     return(
      <div style={{width: '100%', margin: 'auto'}}>
        <div className="page">
          <CSSTransition
            in={true}
            appear={true}
            timeout={1000}
            classNames={"fade-in"}>
              <h1>Contact</h1>
          </CSSTransition>
        </div>
      </div>
     );
   }
}

export default Contact;
