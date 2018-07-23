import React from 'react';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';
import numeral from 'numeral';
import { connect } from 'react-redux';
export const ExpensesSummary = ({ expensesCount, expensesTotal }) => {
  const expenseWord = expensesCount === 1 ? 'expense' : 'expenses';
  const formattedExpensesTotal = numeral(expensesTotal / 100).format('$0,0.00');
  return (
    <div>
      <h1>
        Viewing {expensesCount} {expenseWord} totalling {formattedExpensesTotal}
      </h1>
    </div>
  );
};
const mapStateToProps = state => ({
  expensesTotal: selectExpensesTotal(selectExpenses(state)),
  expensesCount: selectExpenses(state).length
});

export default connect(mapStateToProps)(ExpensesSummary);
