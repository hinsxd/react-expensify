import moment from 'moment';

export default ({
  expenses,
  filters: { text, sortBy, startDate, endDate }
}) => {
  return expenses
    .filter(expense => {
      const startDateMatch = startDate
        ? startDate.isSameOrBefore(expense.createdAt, 'day')
        : true;

      const endDateMatch = endDate
        ? endDate.isSameOrAfter(expense.createdAt, 'day')
        : true;

      const textMatch = expense.description
        .toLowerCase()
        .includes(text.toLowerCase());
      return startDateMatch && endDateMatch && textMatch;
    })
    .sort((a, b) => {
      if (sortBy === 'date') {
        return a.createdAt.isSameOrBefore(b.createdAt) ? 1 : -1;
      }
      if (sortBy === 'amount') return a.amount < b.amount ? 1 : -1;
    });
};
