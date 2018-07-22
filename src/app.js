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

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
