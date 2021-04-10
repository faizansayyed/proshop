import mongoose from "mongoose";

const mongoURI =
  "mongodb+srv://faizan1234:ijaruwQbQNHjEa0d@sayyedmedia.slxpw.mongodb.net/proshop?retryWrites=true&w=majority";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(mongoURI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.error(`1 Error: ${error.message}`.red.underline.bold);
    process.exit(1);
  }
};

export default connectDB;
