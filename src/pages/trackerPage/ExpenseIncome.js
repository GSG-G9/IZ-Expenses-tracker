/* eslint-disable no-return-assign */
import React from "react";
import propTypes from "prop-types";

export default class ExpenseIncome extends React.Component {
  state = {
    incomeExpense: [0, 0],
  };
  calculateIncomeExpense = (transactions) => {
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
        this.props.giveMeIncomeExpense(this.state.incomeExpense);
      }
    );
  };

  componentDidUpdate(prevProps) {
    const { transactions } = this.props;

    if (transactions !== prevProps.transactions) {
      this.calculateIncomeExpense(transactions);
    }
  }

  render() {
    const { incomeExpense } = this.state;
    console.log("incoooomeExponse", incomeExpense);

    return (
      <>
        <section className="income-expense-section">
          <div className="income-container">
            <p>income</p>
            <p>${incomeExpense[0]} </p>
          </div>
          <div className="expense-container">
            <p>expense</p>
            <p>${incomeExpense[1]} </p>
          </div>
          <div />
        </section>
      </>
    );
  }
}

ExpenseIncome.propTypes = {
  transactions: propTypes.array,
  giveMeIncomeExpense: propTypes.func,
};
