import moment from 'moment';
export default [
  {
    id: '0',
    description: 'rent',
    amount: 1,
    note: 'some note',
    createdAt: moment(0)
  },
  {
    id: '1',
    description: 'gum',
    amount: 3,
    note: 'some note',
    createdAt: moment(0).subtract(4, 'day')
  },
  {
    id: '2',
    description: 'water bill',
    amount: 5,
    note: 'some note',
    createdAt: moment(0).add(4, 'day')
  }
];
