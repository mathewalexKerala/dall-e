import mongoose, { mongo } from "mongoose";

const connectDB =(url,err) => {
  mongoose.set('strictQuery',true)
  mongoose.connect(url,err)
  .then(()=>console.log('Monogodb has connected'))
}

export default connectDB