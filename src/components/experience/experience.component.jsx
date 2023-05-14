import React from 'react';
import './experience.component.css';
import {BsPatchCheckFill} from "react-icons/bs";

export default class Experience extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section id='experience'>
        <h5>What Skills I have</h5>
        <h2>My Experience</h2>
        <div className="container experience__container">
          <div className="experience__frontend">
            <h3>Frontend Development</h3>
            <div className="experience__content">

              <article className="experience__details">
                <BsPatchCheckFill />
                <div>
                  <h4>HTML</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>

              <article className="experience__details">
                <BsPatchCheckFill />
                <div>
                  <h4>CSS</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>

              <article className="experience__details">
                <BsPatchCheckFill />
                <div>
                  <h4>JavaScript</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>

              <article className="experience__details">
                <BsPatchCheckFill />
                <div>
                  <h4>ReactJS</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>

              <article className="experience__details">
                <BsPatchCheckFill />
                <div>
                  <h4>Angular</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>

            </div>
          </div>
          <div className="experience__backend">
            <h3>Backend Development</h3>
            <div className="experience__content">

              <article className="experience__details">
                <BsPatchCheckFill />
                <div>
                  <h4>NodeJS</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>

              <article className="experience__details">
                <BsPatchCheckFill />
                <div>
                  <h4>MongoDB</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>

              <article className="experience__details">
                <BsPatchCheckFill />
                <div>
                  <h4>Redis</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>

              <article className="experience__details">
                <BsPatchCheckFill />
                <div>
                  <h4>PHP</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>

              <article className="experience__details">
                <BsPatchCheckFill />
                <div>
                  <h4>MySQL</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>

            </div>
          </div>
        </div>
      </section>
    );
  }
}
