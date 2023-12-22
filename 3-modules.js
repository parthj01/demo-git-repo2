//Modules in Node js
//Common JS , Every file is a module (by default)
//Modules = Encapsulated Code (Only share minimum)

const names = require("./4-names");
// console.log(names);
const sayHi = require("./5-utils");
const data = require("./6-alternative-flavour");
// console.log(data);
require("./7-mind-grenade");

sayHi("susan");
sayHi(names.john);
sayHi(names.peter);

/*Don't see here.... IT's just for practise*/

// const namo = require("./4-names");
// const helloTune = require("./5-utils");
// console.log(namo.firstName);
// console.log(namo.lastName);
// helloTune("Parth");
// helloTune("Jayswal");
