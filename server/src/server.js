const http = require("http");

const app = require("./app");
const { connectDB } = require("./models/students.module.js");

const PORT = process.env.PORT || 8000;

const server = http.createServer(app);



connectDB().then(() => {
  server.listen(PORT, () =>
    console.log(`Server is running on ${PORT} port...`)
  );
});
