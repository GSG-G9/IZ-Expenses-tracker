import React from 'react';
import PropTypes from 'prop-types';

class History extends React.Component {
  AddTransaction = () => {
    const { transactions } = this.props;

    return transactions.map(({ text, price }, index) => {
      return (
        <div
          className="transaction-item"
          key={index}
          style={{ border: price > 0 ? "1px solid green" : "1px solid red" }}
        >
          <p className="transaction-text">{text}</p>
          <p className="transaction-price">{price}</p>
        </div>
      );
    });
  };

  render() {
    return (
      <>
        <p>History</p>
        <this.AddTransaction />
      </>
    );
  }
}

History.propTypes = {
  transactions: PropTypes.array,
};

export default History;
