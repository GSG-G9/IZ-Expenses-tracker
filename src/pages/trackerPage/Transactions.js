import React from 'react';
import PropTypes from 'prop-types';
import '../../App.css';

export default class Transactions extends React.Component {
  handelSubmit = (e) => {
    const { giveMeTransactions } = this.props;
    e.preventDefault();
    const text = e.target.elements[0].value;
    const price = e.target.elements[1].value;
    giveMeTransactions({ text, price });
  }

  render() {
    return (
      <>
        <form className="transaction-form" onSubmit={this.handelSubmit}>
          <p className="transaction-title">Add new transactions</p>
          <hr className="transaction-item-line"></hr>
          <input
            className="form-input"
            placeholder="e.g, clothes"
            type="text"
          />
          <input className="form-input" placeholder="-100" type="number" />
          <button className="submit-transaction-btn"   type="submit">Add Transaction</button>
        </form>
      </>
    );
  }
}

Transactions.propTypes = {
  giveMeTransactions: PropTypes.func.isRequired,
};
