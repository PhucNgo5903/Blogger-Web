
import mongoose from "mongoose";

export const ConnectDB = async () => {
    await mongoose.connect('mongodb+srv://<username>:<db_password>@<clustername>.mongodb.net/blog-app')
    console.log("DB connected");
}   
