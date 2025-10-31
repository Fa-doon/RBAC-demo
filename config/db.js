const mongoose = require('mongoose');

const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log(`Connection to database successful!`);
  } catch (error) {
    console.log(`Database connection failed: `, error);
    process.exit(1);
  }
};

module.exports = connectToDB;
