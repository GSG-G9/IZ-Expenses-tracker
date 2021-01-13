/* eslint-disable import/no-named-as-default-member */
import React from 'react';
import { withRouter } from 'react-router-dom';

import Balance from './Balance';
import ExpenseIncome from './ExpenseIncome';
import History from './History';
import Transactions from './Transactions';
import '../../App.css';

const Back = withRouter(({ history }) => (
  <button
    type="button"
    className="back-btn"
    onClick={() => {
      history.push('/');
    }}
  >
    Back
  </button>
));

export default class Tracker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      transactions: [],
      balance: 0,
    };
  }

  giveMeTransactions = (TransactionsArray) => {
    this.setState((prevState) => {
      return {
        transactions: [TransactionsArray, ...prevState.transactions],
      };
    });
  }

  giveMeIncomeExpense = (incomeExpenseArray) => {
    this.setState({ balance: incomeExpenseArray[0] - incomeExpenseArray[1] });
  }

  render() {
    const { transactions, balance } = this.state;
    return (
      <>
        <Balance balance={balance} />
        <ExpenseIncome
          transactions={transactions}
          giveMeIncomeExpense={this.giveMeIncomeExpense}
        />
        <History transactions={transactions} />
        <Transactions giveMeTransactions={this.giveMeTransactions} />
        <Back />
      </>
    );
  }
}
