
import mongoose from "mongoose";

export const ConnectDB = async () => {
    await mongoose.connect('mongodb+srv://greatstack:Haitac2004@cluster0.7hi6l.mongodb.net/blog-app')
    console.log("DB connected");
}   
