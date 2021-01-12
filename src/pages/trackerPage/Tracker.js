import React from 'react';
import Balance from './Balance';
import ExpenseIncome from './ExpenseIncome';
import History from './History';
import Transactions from './Transactions';

export default class Tracker extends React.Component {
  state = {
    transactions: []
  }

  giveMeTransactions = (TransactionsArray) => {
    // console.log(TransactionsArray);
    this.setState((prevState) => {
      return {
        transactions: [TransactionsArray, ...prevState.transactions]
      }
    })
  }

  render() {
    console.log(this.state.transactions);
    return (
      <>
        <Balance />
        <ExpenseIncome />
        <History />
        <Transactions giveMeTransactions={this.giveMeTransactions} />
      </>
    );
  }
}
