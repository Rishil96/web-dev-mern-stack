// Import a module
import {log} from './logger.mjs';

function sayHello(name) {
    console.log(`Hello ${name}!`);
}

sayHello("Rishil");
// console.log(window);
log("New log added!");

// Parsing and working with paths
import path from 'path';
import { fileURLToPath } from 'url';


// Create __filename by converting the URL of the module to a file path
const __filename = fileURLToPath(import.meta.url);

// Create __dirname by getting the directory name from __filename
const __dirname = path.dirname(__filename);


let pathObj = path.parse(__filename);
console.log(pathObj); 


// OS Module
import os from 'os';

let totalMem = os.totalmem();
let freeMem = os.freemem();

console.log("Total Memory:", totalMem);
console.log("Free Memory:", freeMem);