import mongoose from 'mongoose';
const BookingSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true, // Trims whitespace
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
    lowercase: true,
    match: [/.+\@.+\..+/, 'Please enter a valid email address'], // Basic email validation
  },
  checkIn: {
    type: Date,
    required: [true, 'Check-in date is required'],
  },
  checkOut: {
    type: Date,
    required: [true, 'Check-out date is required'],
  },
  guests: {
    type: Number,
    required: [true, 'Number of guests is required'],
    min: [1, 'Must have at least 1 guest'],
  },
  bookingDate: {
    type: Date,
    default: Date.now, // Automatically set to the current date and time
  },
});

const Booking = mongoose.model('Booking', BookingSchema);
export default Booking;