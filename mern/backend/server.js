const app = require('./app');

const dotenv = require('dotenv');
const mongo = require('./utils/MongoConnector');
const connectDatabase = require('./config/database');

//config
dotenv.config({ path: 'backend/config/config.env' });

//connecting to database
mongo;
// connectDatabase();

console.log(process.env.PORT);
app.listen(3030, () => {
  console.log(`server is working on http://localhost:3030`);
});

// app.listen(process.env.PORT, () => {
//   console.log(`server is working on http://localhost:${process.env.PORT}`);
// });
