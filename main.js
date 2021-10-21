import myDefault , { testString, testFunc, testClass } from "./module1.js";

console.log(testString);

console.log(testFunc(2));

let obj = new testClass('Milad');
obj.handle();

console.log(myDefault);