import app from "./app.js";

const start = async () => {
  app.listen(3000, () => {
    console.log("Server is running");
  });
};

start();
