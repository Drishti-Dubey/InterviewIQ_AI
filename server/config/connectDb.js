import mongoose, { mongo } from "mongoose";

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("Connected to MongoDB successfully");
    } catch (error) {
        console.log(`Database error ${error}`);
    }
}

export default connectDb;