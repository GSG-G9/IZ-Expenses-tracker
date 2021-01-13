import React from 'react';
import propTypes from 'prop-types';

const Balance = ({ balance }) => {
  return (
    <section className="balanceSection">
      <p>your balance</p>
      <p>{balance}</p>
    </section>
  );
};

Balance.propTypes = {
  balance: propTypes.number.isRequired,
};

export default Balance;
