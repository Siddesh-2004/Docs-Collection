import mongoose, { Schema, Document } from "mongoose";

interface User extends Document {
  username: string;
  email: string;
  password: string;
}

const UserSchema:Schema<User>=new Schema({
    username:{
        type:String,
       unique:true,
               required:[true,"email should exists"]

    },
    email:{
        type:String,
        unique:true,
        required:[true,"email should exists"]
    },
    password:{
        type:String,
        required:[true,"please enter the password"]
    }

},{
    timestamps:true
})

const UserModel=(mongoose.models.User as mongoose.Model<User>)||mongoose.model<User>("User",UserSchema)

export default UserModel;