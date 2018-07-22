import {
  setTextFilter,
  sortByDate,
  sortByAmount,
  setStartDate,
  setEndDate
} from '../../actions/filters';
import moment from 'moment';

test('should generate sort by date action', () => {
  const action = sortByDate();
  expect(action).toEqual({
    type: 'SORT_BY_DATE'
  });
});

test('should generate sort by amount action', () => {
  const action = sortByAmount();
  expect(action).toEqual({
    type: 'SORT_BY_AMOUNT'
  });
});

test('should generate text filter action with given text', () => {
  const text = 'sometext';
  const action = setTextFilter(text);
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text
  });
});

test('should generate clear text filter action with default value', () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ''
  });
});

test('should generate set startDate filter action with given time', () => {
  const time = moment(0);
  const action = setStartDate(time);
  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: time
  });
});

test('should generate clear startDate filter action with default value', () => {
  const action = setStartDate();
  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: undefined
  });
});

test('should generate set endDate filter action with given time', () => {
  const time = moment(0);
  const action = setEndDate(time);
  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: time
  });
});

test('should generate clear endDate filter action with default value', () => {
  const action = setEndDate();
  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: undefined
  });
});
