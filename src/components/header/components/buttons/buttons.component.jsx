import * as React from 'react';
import CV from '../../../../assets/cv.pdf';
import './buttons.component.css';

export class Buttons extends React.Component {
  render() {
    return (
      <div className='buttons'>
        <a href={CV} download className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
      </div>
    );
  }
}
