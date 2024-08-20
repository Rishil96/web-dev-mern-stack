import mongoose from 'mongoose';
import User from './User.js';

// Connection to mongodb using mongoose takes 3 parameters:-
/*
1. Connection String
2. Function to run when connected successfully
3. Function to run when connection faced error
Second and third parameters are optional.
*/
mongoose.connect("mongodb://localhost/testdb");


const user1 = new User(
    {
        name: "Rishil",
        age: 27
    }
);


// Promise syntax: (won't normally be used)
// user1.save().then(() => console.log("User Saved"));


async function run() {
    const user1 = new User(
        {
            name: "Rishil",
            age: 27
        }
    )
    await user1.save();
    console.log("User1 Saved ", user1);

    // This does the same thing as above 2 lines create and save
    const user2 = await User.create(
        {
            name: "Ashwin",
            age: 23
        }
    );

    console.log("User2 Saved", user2);

    user2.name = "Ramesh";
    user2.age = 60;
    user2.save();
}


async function createUser() {
    try {
        const user = await User.create(
            {
                name: "Ashwin",
                age: 23,
                email: "ashwin.ramesh@email.com",
                hobbies: ["Gym", "Table Tennis"],
                address: {
                    street: "Station Road",
                    city: "Mumbai"
                }
            }
        )
        console.log(user);

    } catch (e) {
        console.log(e.message);
    }
}

// run();
// createUser();