import mongoose from "mongoose";

const addressScheam = new mongoose.Schema(
    {
        street: String,
        city: String
    }
)

const userSchema = new mongoose.Schema(
    {
        name: String,
        // Set min and max range for age
        age: {
            type: Number,
            min: 1,
            max: 100,
            // Passing custom validation in our field
            // validate: {
            //     validator: v => v % 2 === 0,
            //     message: props => `${props.value} is not an even number`
            // }
        },
        // Set email to be required, min length to be 10 and all lowercase
        email: {
            type: String,
            minLength: 10,
            required: true,
            lowercase: true
        },
        // Don't allow created at to be changed manually and have default value to now()
        createdAt: {
            type: Date,
            immutable: true,
            default: () => Date.now()
        },
        updatedAt: {
            type: Date,
            default: () => Date.now()
        },
        // Best friend should be another object in the collection
        bestFriend: mongoose.SchemaTypes.ObjectId,
        hobbies: [String],   // Array of strings
        address: addressScheam
    }
);


const User = mongoose.model("User", userSchema);

export default User;
