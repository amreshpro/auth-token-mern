import mongoose from "mongoose";
import EnvConfig from "../config/EnvConfig.js";

async function ConnectDB() {
  mongoose
    .connect(EnvConfig.DB_URL, {
      dbName: "AuthJWT",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Database connected successfully!");
    })
    .catch((err) => console.log(err.message));

  mongoose.connection.on("connnected", () => {
    console.log("Mongoose Connected to DB");
  });

  mongoose.connection.on("error", (err) => {
    console.log("Error:Mongoose Connection Failed: " + err.message);
  });

  mongoose.connection.on("disconnected", () => {
    console.log("Disconnect:Disconnected from mongodb : ");
  });


process.on("SIGINT",async()=>{
  await mongoose.connection.close();
  process.exit(0)

})
}

export default ConnectDB;
