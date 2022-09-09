const dotenv = require('dotenv');
const mongoose = require('mongoose');
dotenv.config({ path: './config/config.env' })

const connectDB = async () => {
    try {
      const DB = process.env.DB;
  
      const conn = await mongoose.connect(DB, { useNewUrlParser: true, useUnifiedTopology: true })
      console.log('Successfully connected to database', conn.connection.host)
    } catch (err) {
      console.error('Error occurred while connecting to DB', err.message)
    }
  }
  
  module.exports = connectDB