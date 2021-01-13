import React from 'react';
import propTypes from 'prop-types';
import '../../App.css';

const Balance = ({ balance }) => {
  return (
    <section className="balanceSection">
      <p className="balance">your balance</p>
      <p className="balance-value">{balance}</p>
    </section>
  );
};

Balance.propTypes = {
  balance: propTypes.number.isRequired,
};

export default Balance;
