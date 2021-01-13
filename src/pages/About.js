import React from 'react';
import { withRouter } from 'react-router-dom';

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
    <section className="about-us">
      <p className="about-us-tag">
        We are Iman and Zein, we created this app to help you keep track of your
        money movements and exchanges, for further questions please
        <Button />
        <Back />
      </p>
    </section>
  );
};
export default About;
