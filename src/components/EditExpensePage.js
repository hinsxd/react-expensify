import React, { Component } from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import { editExpense, removeExpense } from '../actions/expenses';

export class EditExpensePage extends Component {
  onSubmit = expense => {
    this.props.editExpense(this.props.expense.id, expense);
    this.props.history.push('/');
  };
  onRemove = () => {
    this.props.removeExpense({ id: this.props.expense.id });
    this.props.history.push('/');
  };
  render() {
    return (
      <div>
        <h1>Edit Expense</h1>
        <p>Editing {this.props.expense.id}</p>
        <ExpenseForm expense={this.props.expense} onSubmit={this.onSubmit} />
        <button onClick={this.onRemove}>Remove</button>
      </div>
    );
  }
}

const mapStateToObject = (state, props) => ({
  expense: state.expenses.find(expense => expense.id === props.match.params.id)
});
const mapDispatchToProps = (dispatch, props) => ({
  editExpense: expense => dispatch(editExpense(expense.id, expense)),
  removeExpense: data => dispatch(removeExpense(data))
});

export default connect(
  mapStateToObject,
  mapDispatchToProps
)(EditExpensePage);
