import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  //   try {
  //     const connectionInstance = await mongoose.connect(
  //       `${process.env.MONGODB_URI}/${DB_NAME}`
  //     );

  //     console.log(
  //       `\n MonogoBG connected !! DB HOST : ${connectionInstance.connection.host}`
  //     );
  //   } catch (error) {
  //     console.log(error);
  //     process.exit(1);
  //   }

  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );

    console.log(`mongodb connected sussefully !!! DB HOST :`);
    // console.log(connectionInstance);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default connectDB;
