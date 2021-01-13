import React from "react";

import Balance from "./Balance";
import ExpenseIncome from "./ExpenseIncome";
import History from "./History";
import Transactions from "./Transactions";

export default class Tracker extends React.Component {
  state = {
    transactions: [],
    balance: 0,
  };

  giveMeTransactions = (TransactionsArray) => {
    this.setState((prevState) => {
      return {
        transactions: [TransactionsArray, ...prevState.transactions],
      };
    });
  };

  giveMeIncomeExpense = (incomeExpenseArray) => {
    this.setState({ balance: incomeExpenseArray[0] - incomeExpenseArray[1] });
  };

  render() {
    const { transactions, balance } = this.state;
    console.log("balance", balance);
    return (
      <>
        <Balance balance={balance} />
        <ExpenseIncome
          transactions={transactions}
          giveMeIncomeExpense={this.giveMeIncomeExpense}
        />
        <History transactions={transactions} />
        <Transactions giveMeTransactions={this.giveMeTransactions} />
      </>
    );
  }
}
