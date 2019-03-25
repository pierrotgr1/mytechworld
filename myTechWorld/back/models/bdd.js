const mongoose = require('mongoose');

const dbUrl = 'mongodb://pierre:qwerty12@ds121996.mlab.com:21996/mytechworld';

const options = {
  connectTimeoutMS: 5000,
  useNewUrlParser: true
};

mongoose.connect(dbUrl, options, error => {
  if (error) {
    console.error(error);
  } else {
    console.log('Your database is operational...')
  }
});

module.exports = {
  mongoose: mongoose,
}
