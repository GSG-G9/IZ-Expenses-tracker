import React from 'react';
import { withRouter } from 'react-router-dom';

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

const ContactUs = () => {
  return (
    <section className="contact-us">
      <p className="contacts">
        Iman:- Email: imans.ewaiti@gmail.com GitHub:
        <a href="https://github.com/imansedky5">github.com/imansedky5</a>
      </p>
      <p className="contacts">
        Zein:- Email: z.jendeya@gmail.com GitHub:
        <a href="https://github.com/zeinjendeya">github.com/zeinjendeya</a>
      </p>
      <Back />
    </section>
  );
};

export default ContactUs;
