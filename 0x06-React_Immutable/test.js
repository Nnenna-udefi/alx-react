// Import the getImmutableObject function from the 0-fromjs.js file
const getImmutableObject = require('./1-map');

// The object you want to convert
const inputObject = {
  fear: true,
  smell: -1033575916.9145899,
  wall: false,
  thing: -914767132,
};

// Call the function to get an immutable Map
const immutableMap = getImmutableObject(inputObject);

// Log the result
console.log('Immutable Map:', immutableMap.toJS());
