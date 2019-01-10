/*
Implement a function that flattens a nested array.

flatten([1,[2],[3, [[4]]]]);
=> [1,2,3,4]
*/

const deepFlatten = arr => [].concat( ...arr.map(v => Array.isArray(v) ? deepFlatten(v) : v) );
