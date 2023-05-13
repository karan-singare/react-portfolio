import React from 'react';
import './navigation.component.css';
import {AiOutlineHome} from "react-icons/ai";
import {AiOutlineUser} from "react-icons/ai";
import {BiBook} from "react-icons/bi";
import {RiServiceLine} from "react-icons/ri";
import {BiMessageSquareDetail} from "react-icons/bi";

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeNav: '#',
    };
  }

  render() {
    const {activeNav} = this.state;
    return (
      <nav className='nav'>
        <a href="#" onClick={() => this.setState({activeNav: '#'})} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
        <a href="#about" onClick={() => this.setState({activeNav: '#about'})} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
        <a href="#experience" onClick={() => this.setState({activeNav: '#experience'})} className={activeNav === '#experience' ? 'active' : ''}><BiBook /></a>
        <a href="#services" onClick={() => this.setState({activeNav: '#services'})} className={activeNav === '#services' ? 'active' : ''}><RiServiceLine /></a>
        <a href="#contact" onClick={() => this.setState({activeNav: '#contact'})} className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail /></a>
      </nav>
    )
  }
}
