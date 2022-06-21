import "express-async-errors";
import express from "express";
import routers from "./routes";
import { errorHandler } from "./errors";

const app = express();

app.use(express.json());
routers(app);
app.use((err, res) => {
  return errorHandler(err, res);
});

export default app;
