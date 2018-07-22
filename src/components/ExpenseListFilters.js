import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import {
  setTextFilter,
  sortByDate,
  sortByAmount,
  setStartDate,
  setEndDate
} from '../actions/filters';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

export class ExpenseListFilters extends Component {
  state = {
    calendarFocused: null
  };
  onDatesChange = ({ startDate, endDate }) => {
    this.props.setStartDate(startDate);
    this.props.setEndDate(endDate);
  };
  onFocusChange = focused => {
    this.setState({
      calendarFocused: focused
    });
  };
  onTextChange = e => {
    this.props.setTextFilter(e.target.value);
  };
  onSortChange = e => {
    if (e.target.value === 'date') {
      this.props.sortByDate();
    } else if (e.target.value === 'amount') {
      this.props.sortByAmount();
    }
  };
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.props.filters.text}
          onChange={this.onTextChange}
        />
        <select value={this.props.filters.sortBy} onChange={this.onSortChange}>
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>
        <DateRangePicker
          startDate={this.props.filters.startDate}
          endDate={this.props.filters.endDate}
          onDatesChange={this.onDatesChange}
          showClearDates={true}
          numberOfMonths={1}
          focusedInput={this.state.calendarFocused}
          onFocusChange={this.onFocusChange}
          isOutsideRange={() => false}
          startDateId="id"
          endDateId="id"
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  filters: state.filters
});
const mapDispatchToProps = dispatch => ({
  setTextFilter: value => dispatch(setTextFilter(value)),
  sortByDate: () => dispatch(sortByDate()),
  sortByAmount: () => dispatch(sortByAmount()),
  setStartDate: startDate => dispatch(setStartDate(startDate)),
  setEndDate: endDate => dispatch(setEndDate(endDate))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExpenseListFilters);
