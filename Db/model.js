import mongoose from "mongoose";


const userSchema =async()=>{
     await mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please Enter name"],
        trim: true,
        lowecase: true
    },
    email: {
        type: String,
        required: [true, "Please Enter email"],
        trim: true,
        lowecase: true
    },
    password: {
        type: String,
        required: [true, "Please Enter password"],
        trim: true,
        lowecase: true
    },
    mobile_no: {
        type: Number,
        required: [true, "Please Enter name"],
        trim: true,
        lowecase: true
    },

});}


const Register_user = async()=>{
    await mongoose.model("Register_user", userSchema)
    console.log("COllection created");
}
export default Register_user;