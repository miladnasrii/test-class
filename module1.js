import { testNumber as tn } from "./module2.js";

export var testString = "Hello I am a string variable";

export const testFunc = () =>
{
    return "I am a Function and "+tn;
}

export class testClass{
    constructor(x){
        this.x = x;
    }
    handle(){
        console.log('this is a '+this.x+' in test Class');
    }
}

export default "I am default!";