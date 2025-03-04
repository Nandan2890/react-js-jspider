import {add as addition, subtract, useState} from "./function.js";
import mulitply from "./function.js";

let result1 = addition(10, 20);
console.log(result1);

let result2 = subtract(50, 10);
console.log(result2);

//! how useState works internally
let [state, setState] = useState(10);
console.log(state);
console.log(setState);

//! default export
let result = mulitply(2, 5);
console.log(result);