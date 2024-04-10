import mongoose from "mongoose"


const db=async()=>{
    try {
       async mongoose.connect("mongodb+srv://jot77430:<password>@cluster0.l1o5djw.mongodb.net/bcrypt_data")    ;
       console.log("db connected ");
    
    } catch (error) {
        console.log("Mongoose Db connection error ",error)
    }
}