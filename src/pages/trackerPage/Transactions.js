import React from 'react';
import PropTypes from 'prop-types';

export default class Transactions extends React.Component {
  handelSubmit = (e) => {
    e.preventDefault();
    const text = e.target.elements[0].value;
    const price = e.target.elements[1].value;
    this.props.giveMeTransactions({ text, price });
  };

  render() {

    return (
      <>
        <form className="transaction-form" onSubmit={this.handelSubmit}>
          <p>Add new transactions</p>
          <input
            className="form-input"
            placeholder="e.g, clothes"
            type="text"
          />
          <input className="form-input" placeholder="-100" type="number" />
          <button type="submit">Add Transaction</button>
        </form>
      </>
    );
  }
}

Transactions.propTypes = {
  giveMeTransactions: PropTypes.func,
};
