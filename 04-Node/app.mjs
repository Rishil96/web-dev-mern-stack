// Import a module
import {log, Logger} from './logger.mjs';

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


// File System Module
import fs from 'fs';

const files = fs.readdir('./', function(err, files) {
    if (err) console.log('Error', err);
    else console.log('Result', files);
});
console.log(files);


// Events
import events from 'events';
import { EventEmitter } from 'events';

const emitter = new EventEmitter();

// Register a listener
emitter.on('messageLogged', function(arg) {
    console.log('Listener called', arg);
});

// Below line means we make a noise or signal that an event has happened
// It is good practice to send event arguments as an object
emitter.emit('messageLogged', {id: 1, url: 'http://google.com'});


const logger = new Logger();

logger.on('messageLogged', function(arg) {
    console.log('Listener called', arg);
});

logger.log('Message logged using class implementation');


// HTTP
import http from 'http';

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write("Hello world");
        res.end();
    }
    if (req.url === '/api/courses') {
        res.write(JSON.stringify([1, 2, 3]));
        res.end();
    }
});

// server.on('connection', (socket) => {
//     console.log("New connection...");
// })

server.listen(3000);

console.log("Listening on port 3000");
