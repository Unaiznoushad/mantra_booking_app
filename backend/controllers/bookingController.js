import Booking from '../models/Booking.js';
const getBookingController = async (req, res) => {
  try {

    const bookings = await Booking.find().sort({ checkIn: 1 });
    res.status(200).json(bookings);

  } catch (error) {
    console.error('Server error on GET /api/bookings:', error);
    res.status(500).json({ message: 'Server error while fetching bookings.' });
  }
};

const postBookingController =async (req, res) => {
  try {
    const { name, email, checkIn, checkOut, guests } = req.body;

   
    if (!name || !email || !checkIn || !checkOut || !guests) {
      return res.status(400).json({ message: 'Please fill all required fields.' });
    }
    
   
    if (new Date(checkOut) <= new Date(checkIn)) {
      return res.status(400).json({ message: 'Check-out date must be after check-in date.' });
    }

   

    const newBooking = new Booking({
      name,
      email,
      checkIn,
      checkOut,
      guests,
    });

    const savedBooking = await newBooking.save();
    res.status(201).json(savedBooking); 

  } catch (error) {

    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map(val => val.message);
      return res.status(400).json({ message: messages.join(', ') });
    }
 
    console.error('Server error on POST /api/bookings:', error);
    res.status(500).json({ message: 'Server error while creating booking.' });
  }
};

export { getBookingController, postBookingController };