import { useState } from "./useState";

let [value,setValue]=useState(0);

console.log(value);
setValue(20);
console.log(value);