import expensesReducers from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
import moment from 'moment';

test('should setup default expenses array', () => {
  const state = expensesReducers(undefined, {
    type: '@@INIT'
  });
  expect(state).toEqual([]);
});

test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  };
  const state = expensesReducers(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expense if id not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: 'some random id'
  };
  const state = expensesReducers(expenses, action);
  expect(state).toEqual(expenses);
});

test('should add expense', () => {
  const expense = {
    id: '3',
    description: 'some bill',
    amount: 6,
    note: 'some note',
    createdAt: moment(0).add(9, 'day')
  };
  const action = {
    type: 'ADD_EXPENSE',
    expense
  };
  const state = expensesReducers(expenses, action);
  expect(state).toEqual([...expenses, expense]);
});

test('should edit expense', () => {
  const id = expenses[1].id;
  const updates = {
    description: 'some bill',
    amount: 7,
    note: 'some notesss',
    createdAt: moment(0).add(9, 'day')
  };
  const action = {
    type: 'EDIT_EXPENSE',
    id,
    updates
  };
  const state = expensesReducers(expenses, action);

  expect(state[1]).toEqual({ id, ...updates });
});

test('should not edit expense if id not found', () => {
  const id = '999';
  const updates = {};
  const action = {
    type: 'EDIT_EXPENSE',
    id,
    updates
  };
  const state = expensesReducers(expenses, action);
  expect(state).toEqual(expenses);
});

test('should set expenses', () => {
  const action = {
    type: 'SET_EXPENSES',
    expenses: [expenses[1]]
  };
  const state = expensesReducers(expenses, action);
  expect(state).toEqual([expenses[1]]);
});
