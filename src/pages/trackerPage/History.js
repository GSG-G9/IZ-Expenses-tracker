import React from 'react';
import PropTypes from 'prop-types';
import '../../App.css';

const History = (props) => {
  const { transactions } = props;
  const AddTransaction = () => {
    return transactions.map(({ text, price }) => {
      return (
        <div
          className="transaction-item-container"
          key={text + price}
          style={{
            border: price > 0 ? '1px solid #33E75A' : '1px solid #F31515',
          }}
        >
          <p className="transaction-text">{text}</p>
          <p className="transaction-price">{price}</p>
        </div>
      );
    });
  };

  return (
    <div className="history-container">
      <p className="history">History</p>
      <hr className="history-hr" />
      <AddTransaction />
    </div>
  );
};

History.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({ text: PropTypes.string, price: PropTypes.number })
  ).isRequired,
};

export default History;
