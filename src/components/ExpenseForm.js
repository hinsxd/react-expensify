import React, { Component } from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

export default class ExpenseForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: props.expense ? props.expense.description : '',
      note: props.expense ? props.expense.note : '',
      amount: props.expense ? (props.expense.amount / 100).toString() : '',
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      calendarFocused: false,
      error: ''
    };
  }

  onDescriptionChange = e => {
    const description = e.target.value;
    this.setState({
      description
    });
  };
  onNoteChange = e => {
    const note = e.target.value;
    this.setState({
      note
    });
  };
  onAmountChange = e => {
    const amount = e.target.value;
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState({
        amount
      });
    }
  };

  onDateChange = createdAt => {
    if (createdAt) {
      this.setState({
        createdAt
      });
    }
  };
  onCalendarFocusChange = ({ focused }) => {
    this.setState({
      calendarFocused: focused
    });
  };

  onSubmit = e => {
    e.preventDefault();
    if (!this.state.description || !this.state.amount) {
      this.setState({
        error: 'Please provide description and amount.'
      });
    } else {
      this.setState({
        error: ''
      });
      const { description, note, amount, createdAt } = this.state;
      this.props.onSubmit({
        description,
        note,
        amount: parseFloat(amount, 10) * 100,
        createdAt: createdAt.valueOf()
      });
    }
  };

  render() {
    return (
      <div>
        {this.state.error && <div>{this.state.error}</div>}
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="Description"
            autoFocus
            value={this.state.description}
            onChange={this.onDescriptionChange}
          />
          <input
            type="text"
            placeholder="Amount"
            value={this.state.amount}
            onChange={this.onAmountChange}
          />
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calendarFocused}
            onFocusChange={this.onCalendarFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
          <textarea
            placeholder="Add a note for your expense (optional)"
            value={this.state.note}
            onChange={this.onNoteChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
