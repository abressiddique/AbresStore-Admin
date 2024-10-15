import mongoose from "mongoose";

let isConnected: boolean = false;

export const connectToDB = async (): Promise<void> => {
  mongoose.set("strictQuery", true)

  if (isConnected) {
    console.log("MongoDB is already connected main section ");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URL || "", {
      dbName: "abres_Admin"
    })

    isConnected = true;
    console.log("MongoDB is connected");
  } catch (err) {
    console.log(err)
  }
}