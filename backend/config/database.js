import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config({
  path:".env"
})
const databaseConnection = () => {
  mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("Database connected"))
    .catch((err) => console.log(err));
}
export default databaseConnection