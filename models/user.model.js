import mongoose from "mongoose";


const UserSchema = new mongoose.Schema({
    email:{
        type:string,
        required:true,
        lowercase:true,
        unique:true
    },
    password:{
        type:string,
        required:true
    }
})


const User = mongoose.model("user",UserSchema)

export default User