const dotenv = require('dotenv');
const app = require('./app');

dotenv.config({ path: './config.env' });

const port = process.env.PORT || 3000;

console.log(process.env.NODE_ENV);

const server = app.listen(port, () => {
  console.log(`app running on ${port}`);
});
