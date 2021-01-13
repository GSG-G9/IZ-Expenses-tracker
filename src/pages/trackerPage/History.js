import React from 'react';
import PropTypes from 'prop-types';
import '../../App.css';

const History = (props) => {
  const { transactions } = props;
  const AddTransaction = () => {
    return transactions.map(({ text, price }) => {
      return (
        <div
          className="transaction-item"
          key={text + price}
          style={{ border: price > 0 ? '1px solid green' : '1px solid red' }}
        >
          <p className="transaction-text">{text}</p>
          <p className="transaction-price">{price}</p>
        </div>
      );
    });
  };

  return (
    <>
      <p className="history-container">History</p>
      <AddTransaction />
    </>
  );
};

History.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({ text: PropTypes.string, price: PropTypes.number })
  ).isRequired,
};

export default History;
