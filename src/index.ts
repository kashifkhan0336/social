import express, { Request, Response } from "express";

async function startServer() {
  const app = express();
  app.listen(process.env.PORT, () => {
    console.log(`Your server is ready !`);
  });
}