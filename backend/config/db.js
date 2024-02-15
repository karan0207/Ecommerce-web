// import mongoose from "mongoose";
// import dotenv from "dotenv";
// dotenv.config();
// // dotenv.config({path:"./../../backend/.env"});


// const connectDB = async () => {

  
//   try {
  
//    await mongoose.connect("mongodb+srv://karanchandel0202k:Karanyoyo2@chatapp.2d0hqbq.mongodb.net/");
//     console.log(`Successfully connected to MongoDB`);
    
//   } catch (error) {
//     console.log(`${error.message}`);
//     process.exit(1);
//   }
// };


// export default connectDB;



import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log(`Successfully connnected to mongoDB 👍`);
  } catch (error) {
    console.error(`ERROR: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;