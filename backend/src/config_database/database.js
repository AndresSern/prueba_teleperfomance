const mongoose = require("mongoose");
const MONGO_URI = "mongodb+srv://SadNight:NocheTriste11021@cluster0.vngmy.mongodb.net/prueba_teleperformance?retryWrites=true&w=majority";
exports.connect = () => {
  // Connecting to the database
  mongoose
    .connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Successfully connected to database");
    })
    .catch((error) => {
      console.log("database connection failed. exiting now...");
      console.error(error);
      process.exit(1);
    });
};