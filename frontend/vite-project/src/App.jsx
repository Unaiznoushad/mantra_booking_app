import React, { useState, useEffect } from 'react';
import { BedDouble, Mountain, Sparkles, Facebook, Instagram, Twitter, Menu, X, CalendarCheck, Users } from 'lucide-react';


const API_URL = 'http://localhost:5000/api'; 


function Header({ setView }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


  const navLinks = (
    <>
      <button
        onClick={() => {
          setView('home');
          setIsMobileMenuOpen(false);
        }}
        className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md font-medium transition duration-150"
      >
        Home
      </button>
      <button
        onClick={() => {
          setView('admin');
          setIsMobileMenuOpen(false);
        }}
        className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md font-medium transition duration-150"
      >
        Admin View
      </button>
    </>
  );

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 border-b border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
     
          <div className="shrink-0 flex items-center">
            <h1 className="text-2xl font-extrabold text-blue-700 tracking-wide">
              Mantra Resorts
            </h1>
          </div>
          
      
          <div className="hidden md:flex md:items-center md:space-x-6">
            {navLinks}
          </div>
          
 
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-gray-700 hover:bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
    
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-xl absolute w-full z-40">
          <div className="flex flex-col px-4 pt-2 pb-4 space-y-2">
            {navLinks}
          </div>
        </div>
      )}
    </nav>
  );
}

function HeroSection() {
 
  const imageUrl = "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1650&q=80";

  return (
    <section 
      className="relative h-[65vh] min-h-[400px] bg-cover bg-center text-white"
      style={{ backgroundImage: `url('${imageUrl}')` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4 tracking-tight drop-shadow-lg animate-fadeInDown">
          Mantra Resorts
        </h1>
        <p className="text-xl md:text-3xl mb-10 font-light drop-shadow-md animate-fadeInUp">
          Your escape to tranquility.
        </p>
        <a
          href="#booking-form"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-10 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-xl hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-blue-500/50"
        >
          Book Now
        </a>
      </div>
     
      <style>{`
        @keyframes fadeInDown {
          0% { opacity: 0; transform: translateY(-20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInDown { animation: fadeInDown 1s ease-out; }
        .animate-fadeInUp { animation: fadeInUp 1s ease-out 0.3s backwards; }
      `}</style>
    </section>
  );
}


function ServicesSection() {
  const services = [
    {
      icon: <BedDouble size={48} className="text-blue-600 mb-4" />,
      title: "Accommodation",
      description: "Luxury suites and private villas with breathtaking ocean views.",
    },
    {
      icon: <Mountain size={48} className="text-blue-600 mb-4" />,
      title: "Adventure Activities",
      description: "Guided jungle treks, snorkeling, and local cultural tours.",
    },
    {
      icon: <Sparkles size={48} className="text-blue-600 mb-4" />,
      title: "Wellness & Spa",
      description: "Rejuvenate your body and mind at our world-class spa facilities.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-16 text-gray-900">Our Signature Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-2xl shadow-xl border border-gray-100 transform hover:scale-[1.02] transition-all duration-300 group"
            >
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="text-2xl font-semibold mb-3 text-blue-700 group-hover:text-blue-600 transition-colors">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


function GallerySection() {
  const images = [
    { src: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80", alt: "Resort pool" },
    { src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80", alt: "Resort room interior" },
    // { src: "https://images.unsplash.com/photo-1535827841776-24e39e51349b?auto=format&fit=crop&w=800&q=80", alt: "Beachside dining" },
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-12 text-gray-900">A Glimpse of Paradise</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={image.alt}
              // Fallback for image loading error
              onError={(e) => {
                e.target.onerror = null; 
                e.target.src = `https://placehold.co/800x600/F0F4F8/3B82F6?text=Image+Unavailable`;
              }}
              className="w-full h-64 object-cover rounded-xl shadow-xl border-4 border-white transform hover:scale-[1.03] transition-transform duration-500 cursor-pointer"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// Booking Form Component
function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    checkIn: '',
    checkOut: '',
    guests: 1, 
  });
  const [statusMessage, setStatusMessage] = useState({ type: '', text: '' });

 
  const getTodayDate = () => {
    return new Date().toISOString().split('T')[0];
  };

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({ 
        ...prev, 
        [name]: type === 'number' ? parseInt(value, 10) : value 
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatusMessage({ type: 'loading', text: 'Submitting booking...' });
    

    const checkInDate = new Date(formData.checkIn);
    const checkOutDate = new Date(formData.checkOut);

    if (checkOutDate <= checkInDate) {
      setStatusMessage({ type: 'error', text: 'Check-out date must be after check-in date.' });
      return;
    }
    if (checkInDate < new Date(getTodayDate())) {
      setStatusMessage({ type: 'error', text: 'Check-in date cannot be in the past.' });
      return;
    }
    
    
    try {
      const response = await fetch(`${API_URL}/bookings`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
  
        body: JSON.stringify({...formData, guests: parseInt(formData.guests, 10)}),
      });

      const result = await response.json();

      if (!response.ok) {
    
        const errorMessage = result.message || (result.errors ? result.errors.join(', ') : 'Failed to submit booking. Check server console.');
        throw new Error(errorMessage);
      }

      setStatusMessage({ type: 'success', text: 'Booking successful! You can view it in the Admin Panel.' });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        checkIn: '',
        checkOut: '',
        guests: 1,
      });
    } catch (error) {
      console.error('Booking error:', error);
      setStatusMessage({ type: 'error', text: error.message || 'An unexpected error occurred. Is the backend server running on port 3001?' });
    }

  };

  return (
    <section id="booking-form" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-4xl font-bold text-center mb-10 text-gray-900">Secure Your Retreat</h2>
        <form onSubmit={handleSubmit} className="space-y-8 bg-gray-50 p-6 sm:p-10 rounded-2xl shadow-2xl border-t-4 border-blue-600">
          {/* Form fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-inner focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-inner focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label htmlFor="checkIn" className="block text-sm font-semibold text-gray-700 mb-2">Check-in Date</label>
              <input
                type="date"
                id="checkIn"
                name="checkIn"
                value={formData.checkIn}
                onChange={handleChange}
                min={getTodayDate()}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-inner focus:ring-blue-500 focus:border-blue-500 appearance-none transition duration-200"
                required
              />
            </div>
            <div>
              <label htmlFor="checkOut" className="block text-sm font-semibold text-gray-700 mb-2">Check-out Date</label>
              <input
                type="date"
                id="checkOut"
                name="checkOut"
                value={formData.checkOut}
                onChange={handleChange}
                min={formData.checkIn || getTodayDate()}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-inner focus:ring-blue-500 focus:border-blue-500 appearance-none transition duration-200"
                required
              />
            </div>
             <div>
              <label htmlFor="guests" className="block text-sm font-semibold text-gray-700 mb-2">Number of Guests</label>
              <input
                type="number"
                id="guests"
                name="guests"
                value={formData.guests}
                onChange={handleChange}
                min="1"
                max="10"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-inner focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                required
              />
            </div>
          </div>
          
          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-xl shadow-lg transition duration-300 ease-in-out transform hover:scale-[1.01] focus:outline-none focus:ring-4 focus:ring-blue-500/50"
              disabled={statusMessage.type === 'loading'}
            >
              {statusMessage.type === 'loading' ? 'Processing Request...' : 'Submit Booking'}
            </button>
          </div>
          {/* Status Message */}
          {statusMessage.text && (
            <div className={`text-center p-4 rounded-xl font-medium ${
              statusMessage.type === 'success' ? 'bg-green-100 text-green-800 border border-green-300' :
              statusMessage.type === 'error' ? 'bg-red-100 text-red-800 border border-red-300' :
              'bg-blue-100 text-blue-800 border border-blue-300'
            }`}>
              {statusMessage.text}
            </div>
          )}
        </form>
      </div>
    </section>
  );
}


function BookingDetail({ Icon, label, value, isEmail = false }) {
    return (
        <div className="flex items-center space-x-2 p-2 bg-gray-50 rounded-lg">
            <Icon size={20} className="text-blue-500 flex-shrink-0" />
            <div>
                <span className="block text-xs font-semibold text-gray-500">{label}</span>
                <span className={`block text-gray-800 ${isEmail ? 'truncate' : 'font-medium'}`}>
                    {value}
                </span>
            </div>
        </div>
    );
}


function AdminView() {
  const [bookings, setBookings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const formatDate = (dateString) => {
    try {
      if (!dateString) return 'N/A';
      return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      });
    } catch {
      return 'Invalid Date';
    }
  };
  

  const fetchBookings = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(`${API_URL}/bookings`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch bookings. Is the backend running on port 5000?');
      }
      
      const data = await response.json();
     
      setBookings(data.sort((a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0))); 

    } catch (err) {
      console.error("Fetch error:", err);
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);


  return (
    <div className="container mx-auto px-4 py-12 md:py-16 min-h-[60vh]">
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-4xl font-bold text-gray-900 border-b-4 border-blue-500 inline-block pb-1">Admin Panel: Current Bookings</h2>
        <button
            onClick={fetchBookings}
            className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-xl shadow-md transition duration-200 text-sm font-medium"
            disabled={isLoading}
        >
            {isLoading ? 'Loading...' : 'Refresh Bookings'}
        </button>
      </div>

      
      {isLoading && (
        <div className="flex justify-center items-center h-48">
             <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"></div>
             <p className="ml-4 text-lg text-blue-600">Loading booking data...</p>
             <style>{`
                 .loader {
                     border-top-color: #3b82f6;
                     animation: spin 1s linear infinite;
                 }
                 @keyframes spin {
                     0% { transform: rotate(0deg); }
                     100% { transform: rotate(360deg); }
                 }
             `}</style>
        </div>
      )}
      
      {error && (
        <p className="text-center p-4 bg-red-100 text-red-700 rounded-lg border border-red-300">
             <span className="font-bold">Error:</span> {error}
        </p>
      )}
      
      {!isLoading && !error && bookings.length === 0 && (
        <p className="text-center p-4 bg-yellow-100 text-yellow-700 rounded-lg border border-yellow-300">
             No active bookings found at this time.
        </p>
      )}
      
      {!isLoading && !error && bookings.length > 0 && (
        <div className="max-w-6xl mx-auto space-y-6">
          {bookings.map((booking) => (
            <div key={booking._id} className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition duration-300">
              <div className="flex flex-col md:flex-row justify-between md:items-start mb-4 border-b pb-3">
                <h3 className="text-2xl font-bold text-blue-700">{booking.name}</h3>
                <p className="text-gray-600 italic mt-1 md:mt-0 text-right">Booked On: {formatDate(booking.createdAt)}</p>
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                <BookingDetail Icon={CalendarCheck} label="Check-in Date" value={formatDate(booking.checkIn)} />
                <BookingDetail Icon={CalendarCheck} label="Check-out Date" value={formatDate(booking.checkOut)} />
                <BookingDetail Icon={Users} label="Guests" value={booking.guests} />
                <BookingDetail Icon={Sparkles} label="Email" value={booking.email} isEmail />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}


function Footer() {
  const socialLinks = [
    { icon: <Facebook size={20} />, href: "https://facebook.com", label: "Facebook" },
    { icon: <Instagram size={20} />, href: "https://instagram.com", label: "Instagram" },
    { icon: <Twitter size={20} />, href: "https://twitter.com", label: "Twitter" },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
      
          <div className="mb-6 md:mb-0">
            <h4 className="text-xl font-bold text-white mb-2">Mantra Resorts</h4>
            <p className="text-sm">Email: info@mantraresorts.com</p>
            <p className="text-sm">Phone: (123) 456-7890</p>
            <p className="text-sm">123 Paradise Way, Oceanfront, CA</p>
          </div>
          
    
          <div className="flex justify-center space-x-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300 p-2 rounded-full border border-gray-700 hover:border-blue-400"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-500">
          <p className="text-sm">&copy; {new Date().getFullYear()} Mantra Resorts. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}



function App() {

  const [view, setView] = useState('home');

  return (
 
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800 antialiased flex flex-col">
      <Header setView={setView} />
      
      <div className="flex-grow">
     
      {view === 'home' ? (
        <Home />
      ) : (
        <AdminView />
      )}
      </div>
      
      <Footer />
    </div>
  );
}


function Home() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <GallerySection />
      <BookingForm />
    </main>
  );
}

export default App;