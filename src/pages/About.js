/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { withRouter } from 'react-router-dom';
import '../App.css';

const Button = withRouter(({ history }) => (
  <button
    type="button"
    className="contact-btn"
    onClick={() => {
      history.push('/contactus');
    }}
  >
    Contact us
  </button>
));

const Back = withRouter(({ history }) => (
  <button
    type="button"
    className="back-btn"
    onClick={() => {
      history.push('/');
    }}
  >
    Back
  </button>
));

const About = () => {
  return (
    <>
      <nav className="nav">
        <p className="logo-pages">
          I<span>Z</span>
          TRACKER
        </p>
      </nav>
      <section className="about-us">
        <p className="about-us-tag">
          We are Iman and Zein, we created this app to help you keep track of
          your money movements and exchanges, for further questions please
        </p>
        <div className="btns">
          <Button />
          <Back />
        </div>
      </section>
    </>
  );
};
export default About;
