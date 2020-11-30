import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://restaurant-user:testing123@restaurant-mernstack.fi9rt.mongodb.net/<dbname>?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("database connection established");
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
