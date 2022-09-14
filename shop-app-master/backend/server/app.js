import express from "express";
import mongoose from "mongoose";
import helmet from "helmet";
import hpp from "hpp";
import cors from "cors";

const app = express();
const port = 7000;
require("dotenv").config();
const { MONGO_URI } = process.env;

mongoose.connect(`mongodb+srv://chaeheetae:1234@cluster0.zfye0zk.mongodb.net/?retryWrites=true&w=majority`);

if (process.env.NODE_ENV === "production") {
  app.use(morgan("combined"));
  app.use(helmet());
  app.use(hpp());
} else if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/", express.static("./uploads"));

app.use("/api/product", require("./routes/product"));

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(port, () => {
  console.log("port on 7000");
});

console.log(MONGO_URI)
