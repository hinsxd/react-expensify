import React from 'react';
import { ExpensesSummary } from '../../components/ExpensesSummary';
import { shallow } from 'enzyme';
import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';
let props, wrapper;

beforeEach(() => {
  wrapper = shallow(<ExpensesSummary {...props} />);
});
test('should render correctly with 0 expenses', () => {
  props = {
    expensesTotal: '0',
    expensesCount: 0
  };
  wrapper = shallow(<ExpensesSummary {...props} />);
  expect(wrapper).toMatchSnapshot();
});

test('should render correctly with some expenses', () => {
  props = {
    expensesTotal: selectExpensesTotal(expenses),
    expensesCount: expenses.length
  };
  wrapper = shallow(<ExpensesSummary {...props} />);
  expect(wrapper).toMatchSnapshot();
});
