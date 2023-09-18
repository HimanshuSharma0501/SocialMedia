const mongoose = require("mongoose");

exports.connectDatabase = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      //   useCreateIndex: true,
      //   useFindAndModify: false,
      useUnifiedTopology: true,
    })
    .then((con) => console.log(`Database Connected : ${con.connection.host}`))
    .catch((err) => {
      console.log(err);
    });
};
