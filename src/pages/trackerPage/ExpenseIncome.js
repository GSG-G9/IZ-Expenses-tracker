/* eslint-disable no-return-assign */
import React from 'react';
import PropTypes from 'prop-types';
import '../../App.css';

export default class ExpenseIncome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      incomeExpense: [0, 0],
    };
  }

  calculateIncomeExpense = (transactions) => {
    const { giveMeIncomeExpense } = this.props;
    const { incomeExpense } = this.state;
    const positivePrices = [];
    const negativePrices = [];

    transactions.forEach((el) => {
      if (Math.sign(el.price) === 1) {
        positivePrices.push(el.price);
      } else {
        negativePrices.push(el.price);
      }
    });

    let income = 0;
    let expense = 0;
    positivePrices.forEach((el) => (income += Number(el)));
    negativePrices.forEach((el) => (expense -= Number(el)));

    this.setState(
      {
        incomeExpense: [income, expense],
      },
      () => {
        giveMeIncomeExpense(incomeExpense);
      }
    );
  }
  
  componentDidUpdate(prevProps) {
    const { transactions } = this.props;
    // eslint-disable-next-line no-console
    console.log('hi');
    if (transactions !== prevProps.transactions) {
      this.calculateIncomeExpense(transactions);
    }
  }

  render() {
    const { incomeExpense } = this.state;
    // eslint-disable-next-line no-console
    console.log('incomeExpense', incomeExpense);

    return (
      <>
        <section className="income-expense-section">
          <div className="income-container">
            <p className="income">income</p>
            <p className="income-value">{incomeExpense[0]}</p>
          </div>
          <div className="expense-container">
            <p className="expense">expense</p>
            <p className="expense-value">{incomeExpense[1]}</p>
          </div>
          <div />
        </section>
      </>
    );
  }
}

ExpenseIncome.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({ text: PropTypes.string, price: PropTypes.number })
  ).isRequired,
  giveMeIncomeExpense: PropTypes.func.isRequired,
};
