import React from 'react';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';
import numeral from 'numeral';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
export const ExpensesSummary = ({ expensesCount, expensesTotal }) => {
  const expenseWord = expensesCount === 1 ? 'expense' : 'expenses';
  const formattedExpensesTotal = numeral(expensesTotal / 100).format('$0,0.00');
  return (
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">
          Viewing <span>{expensesCount}</span> {expenseWord} totalling{' '}
          <span>{formattedExpensesTotal}</span>
        </h1>
        <div className="page-header__actions">
          <Link className="button" to="/create">
            Add Expense
          </Link>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = state => ({
  expensesTotal: selectExpensesTotal(selectExpenses(state)),
  expensesCount: selectExpenses(state).length
});

export default connect(mapStateToProps)(ExpensesSummary);
