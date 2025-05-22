import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import userRouter from "./routes/userRoutes.js";
import cookieParser from "cookie-parser";
dotenv.config();

const app = express();

//middleware
app.use(cookieParser());
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: ["http://localhost:5173", "https://rajender-port-folio.vercel.app"],
    credentials: true,
  })
);

// Route (endpoints)
app.use("/api/v1/auth", userRouter);
app.get("/", (req, res) => {
  res.send("API is running!");
});

// connect to mongodb and then start server

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(1); // Exit process with failure
  });
