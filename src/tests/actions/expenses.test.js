import { addExpense, editExpense, removeExpense } from '../../actions/expenses';
import moment from 'moment';

test('should generate addExpense action with provided values', () => {
  const expenseData = {
    description: 'some des',
    note: 'new note',
    amount: 555,
    createdAt: moment()
  };
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  });
});
test('should generate addExpense action with default values', () => {
  const action = addExpense();
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      description: '',
      note: '',
      amount: 0,
      createdAt: moment(0)
    }
  });
});
test('should generate editExpense action', () => {
  expect(
    editExpense('123', {
      note: 'new note',
      amount: 555
    })
  ).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123',
    updates: {
      note: 'new note',
      amount: 555
    }
  });
});
test('should generate removeExpense action', () => {
  expect(removeExpense({ id: '123' })).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123'
  });
});
