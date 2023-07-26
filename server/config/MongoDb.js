import mongoose from "mongoose";

// Set strictQuery option to false before establishing the Mongoose connection
mongoose.set('strictQuery', false);


const connectDatabase = async () => {

  try {
    const conn = await mongoose.connect('mongodb+srv://okpeahiordavid:Dadaod123ani@cluster0.skgzvy9.mongodb.net/store?retryWrites=true&w=majority', {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });

    console.log(`MongoDB Connected`);
  } catch (error) {

    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDatabase;


