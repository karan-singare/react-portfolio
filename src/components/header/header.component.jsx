import React from 'react';
import './header.component.css';
import {Buttons} from "./components/buttons/buttons.component";
import Me from '../../assets/me.png';
import {Socials} from "./components/socials/socials.component";
export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header>
        <div className="container header__container">
          <h5>Hello I'm</h5>
          <h1>Karan Singare</h1>
          <h5 className="text-light">Fullstack Developer</h5>
          <Buttons />
          <Socials />

          <div className="me">
            <img src={Me} alt="me"/>
          </div>

          <a href="#contact" className="scroll__down">Scroll Down</a>
        </div>
      </header>
    )
  }
}
