// Callbacks
function fetchData(callback) {
    setTimeout(() => {
        console.log("Data fetched!");
        callback(); // Executing the callback function
    }, 2000);
}

/* 
    Process data depends on fetch data function output so it is passed as 
    callback function inside fetchData so it can be executed inside
    fetchData to avoid async issues
*/
function processData() {
    console.log("Processing data...");
}

fetchData(processData);


// Promises

// Promise object that tells if the promise was fulfilled or rejected
let pizzaPromise = new Promise((resolve, reject) => {
    let pizzaDelivered = true; // Simulating a successful pizza delivery
    
    setTimeout(() => {
        if (pizzaDelivered) {
            resolve("Pizza is here!"); // Resolve if pizza is delivered
        } else {
            reject("Sorry, no pizza today."); // Reject if there's no pizza
        }
    }, 3000); // Simulate a 3-second wait
});


pizzaPromise
    .then((message) => {
        console.log(message); // then: This runs if the promise is resolved
    })
    .catch((error) => {
        console.error(error); // catch: This runs if the promise is rejected
    });



// Async/Await
async function fetchData2() {
    try {
        let message = await new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("Data fetched successfully!");
            }, 2000);
        });
        console.log(message);
    } catch (error) {
        console.error(error);
    }
}

fetchData2(); // Logs "Data fetched successfully!" after 2 seconds
