const mongoose = require('mongoose');

var options = {
  maxPoolSize: 100,
  wtimeoutMS: 2500,
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// please enter the uri sent on discord
let uri = '';

var connection = mongoose.connect(uri, options, (err, res) => {
  if (err) {
    console.log(err);
    console.log(`MongoDB Connection Failed`);
  } else {
    console.log(`MongoDB Connected`);
  }
});
module.exports = connection;
