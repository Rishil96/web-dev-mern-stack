// Example of a module
let url = "https://mylogger.io/log";

export function log(message) {
    // Send HTTP request
    console.log(message);
}


import { EventEmitter } from "events";


export class Logger extends EventEmitter {
    log(message) {
        console.log(message);

        // Raise event
        this.emit('messageLogged', {id: 1, url: 'http://rishil.com'});
    }
}