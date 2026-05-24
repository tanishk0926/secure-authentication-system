import mongoose from "mongoose";
import config from "./config.js";
import dns from "dns";

dns.setServers(["0.0.0.0" , "8.8.8.8"]);

async function connectDB(){
    await mongoose.connect(config.MONGO_URI);
    console.log("Connected to database");
}

export default connectDB;