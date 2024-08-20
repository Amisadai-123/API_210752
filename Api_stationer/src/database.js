import mongoose from "mongoose";
mongoose.connect("mongodb+srv://pokemondb_user:12345@cluster0.i2opn03.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(() => console.log("Connected to MongoDB"))
.catch((err) => console.error(err));
export default mongoose;