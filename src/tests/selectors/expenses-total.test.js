import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return 0 if no expenses', () => {
  const result = selectExpensesTotal([]);
  expect(result).toBe(0);
});

test('should return proper total for single expense', () => {
  const result = selectExpensesTotal([expenses[1]]);
  expect(result).toBe(expenses[1].amount);
});

test('should return proper total for expenses array', () => {
  const result = selectExpensesTotal(expenses);
  expect(result).toBe(
    expenses[0].amount + expenses[1].amount + expenses[2].amount
  );
});
