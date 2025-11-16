import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import 'dotenv/config'; 
import bookingdata from './routes.js/bookingRoutes.js';


const app = express();
const PORT = process.env.PORT || 3001;


app.use(cors({
    origin: "http://localhost:5173"
}))

app.use(express.json());


app.use(express.urlencoded({ extended: true }));


const MONGODB_URL = process.env.MONGODB_URL;

if (!MONGODB_URL) {
  console.error('Error: MONGODB_URL is not defined in your .env file.');
  process.exit(1); // Exit the process with an error code
}

mongoose.connect(MONGODB_URL)
  .then(() => console.log('Successfully connected to MongoDB.'))
  .catch(err => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  });

app.use('/api',bookingdata);


app.listen(PORT, () => {
  console.log(`Backend server is running on http://localhost:${PORT}`);
});