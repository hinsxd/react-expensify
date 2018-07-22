import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import moment from 'moment';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense, removeExpense, editExpense } from './actions/expenses';
import {
  setTextFilter,
  setStartDate,
  setEndDate,
  sortByAmount,
  sortByDate
} from './actions/filters';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();
store.subscribe(() => {
  console.log(store.getState());
});
console.log(store.getState());

store.dispatch(
  addExpense({
    description: 'Water bill',
    amount: 4500,
    createdAt: moment('2018-07-01', 'YYYY-MM-DD')
  })
);
store.dispatch(
  addExpense({
    description: 'Gas bill',
    amount: 2,
    createdAt: moment('2018-06-30', 'YYYY-MM-DD')
  })
);
store.dispatch(
  addExpense({
    description: 'rent',
    amount: 1000,
    createdAt: moment('2018-07-03', 'YYYY-MM-DD')
  })
);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
