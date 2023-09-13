// Import the getImmutableObject function from the 0-fromjs.js file
const accessImmutableObject = require('./2-nested');

// The object you want to convert
const immutableMap = accessImmutableObject({
    name: {
         first: "Guillaume",
         last: "Salva"
    }
}, ['name', 'first'])
// Call the function to get an immutable Map
 

// Log the result
console.log(immutableMap);
