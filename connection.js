const mongoose = require("mongoose");
require("dotenv").config();
const url = "mongodb+srv://bethaganesh18:28Y7W14LW4wmcPHp@cluster0.ti83fqa.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const connection = async () => {
    try {
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("✅ MongoDB connected successfully");
    } catch (error) {
        console.error("MongoDB connection failed:", error.message);
        throw error;
    }
};
module.exports = connection;
