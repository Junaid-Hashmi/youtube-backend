// require("dotenv").config({ path: "./env" });
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
  path: "./env",
});

connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.error("ERROR", error);
    });

    app.listen(process.env.PORT || 8000, () => {
      console.log("Server is running on port : ", process.env.PORT || 8000);
    });
  })
  .catch((err) => {
    console.log("MongoDB connection error", err);
  });

/*
const app = express();

(async function () {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);

    app.on("error", (error) => {
      console.error("ERROR", error);
      throw error;
    });
  } catch (error) {
    console.error("ERROR: ", error);
    throw error;
  }
})();

app.listen(process.env.PORT, () => {
  console.log("App listening on port ", process.env.PORT);
});
*/
