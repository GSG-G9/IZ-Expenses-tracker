import React from 'react';
import NavBar from './NavBar';
import '../../App.css';
import piccow from './piccow.svg';

const OurMission = () => {
  return (
    <>
      <NavBar />
      <section className="landing-page">
        <p className="opening-tag">
          Welcome to IZ Expenses Tracker, you might face some difficulties
          keeping track of your money exchanges, incomes and outcomes, here you
          will find all the help you need to manage your money!!
        </p>
        <img src={piccow} alt="saver pig" />
      </section>
    </>
  );
};
export default OurMission;
