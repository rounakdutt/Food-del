import mongoose from "mongoose";

export const connectDB = async ()=> {
    await mongoose.connect('mongodb+srv://duttarounak2020:rounak1128@cluster0.k5jdgmh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then(()=>console.log("DB Connected"));
}