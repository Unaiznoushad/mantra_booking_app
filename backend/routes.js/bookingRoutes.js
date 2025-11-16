import { Router } from "express";
import {getBookingController} from '../controllers/bookingController.js';
import {postBookingController} from '../controllers/bookingController.js';
const bookingdata=Router();

bookingdata.get('/bookings',getBookingController);
bookingdata.post('/bookings',postBookingController);

export default bookingdata;