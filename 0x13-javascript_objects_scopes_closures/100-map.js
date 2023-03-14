#!/usr/bin/node
/* import a list */
const lista = require('./100-data').list;

const mappedList = list.map((current, index) => current * index);
console.log(list);
console.log(mappedList);
