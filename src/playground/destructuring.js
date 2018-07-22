//
// Object destructuring
//

// const person = {
//   name: 'hinsxd',
//   age: 23,
//   location: {
//     city: 'Tokyo',
//     temp: 34
//   }
// };

// const { name, age } = person;
// const { city, temp: temperature } = person.location;
// if (city && temperature) {
//   console.log(`${name} is ${age}`);
//   console.log(`It is ${temperature} in ${city}`);
// }

// const book = {
//   title: 'Ego is the enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     // name: 'Penguin'
//   }
// };
// const { name: publisherName = 'Self-published' } = book.publisher;
// console.log(publisherName);

//
// Array destructuring
//

// const address = ['630 Kings Road', 'North Point'];
// const [, , c = 'Hong Kong'] = address;
// console.log(c);

const item = ['Coffee (Hot)', '$2.00', '$2.50', '$2.75'];
const [name, , mediumPrice] = item;
console.log(`A medium ${name} costs ${mediumPrice}`);
