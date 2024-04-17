import express from "express";
import cors from "cors";
import createUserRouter from "./routes/createUser";
const app= express();

app.use(cors());
app.use(express.json());

app.use("/api", createUserRouter);

app.listen(3000, ()=>console.log("server started at port 3000"))

