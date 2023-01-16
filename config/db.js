const mongoose = require("mongoose");

const connectDB = async () => {

    try {
        const conn = await mongoose.connect(process.env.mongodb_url || "mongodb+srv://Flipr:W1RErSYN80NPzDCW@cluster0.bq9eazo.mongodb.net/?retryWrites=true&w=majority", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log(`MongoDB connected: ${conn.connection.host}`);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports = connectDB;