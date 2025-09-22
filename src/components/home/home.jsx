import { useRef } from 'react';
import BookingForm from '../bookingform/bookingform';
import CarList from '../carslist/carlist';
import Footer from '../footer/footer';
import Navbar from '../navbar/navbar';
import Service from '../service/service';
import './home.css';

const Home = () => {
  // Refs for scrolling
  const homeRef = useRef(null);
  const serviceRef = useRef(null);
  const carListRef = useRef(null);
  const bookingRef = useRef(null);
  const footerRef = useRef(null);

  // Scroll function
  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Booking form submit handler
  const handleBookingSubmit = () => {
    alert("✅ Your car has been booked successfully!");
  };

  return (
    <div className="home-wrapper">
      {/* Pass scroll handlers to navbar */}
      <Navbar
        onHomeClick={() => scrollToSection(homeRef)}
        onServiceClick={() => scrollToSection(serviceRef)}
        onFleetClick={() => scrollToSection(carListRef)}
        onBookingClick={() => scrollToSection(bookingRef)}
        onContactClick={() => scrollToSection(footerRef)}
      />

      {/* Hero Section */}
      <div className="container main-cont" ref={homeRef}>
        <div className="text-cont">
          <strong className="text-1">Plan Your Next Trip Now</strong>
          <h1 className="main-heading">
            Save <span className="text-danger">big</span> with our car rental
          </h1>
          <p className="lead">
            Rent the car of your dreams at unbeatable prices. Unlimited miles, flexible pick-up options, and much more!
          </p>

          <div className="button-group mt-3">
            <button className="btn btn-danger mr-3" onClick={() => scrollToSection(bookingRef)}>
              Book a Ride
            </button>
            <button className="btn btn-outline-dark" onClick={() => scrollToSection(serviceRef)}>
              Learn More
            </button>
          </div>
        </div>

        <div className="img-cont">
          <img src="src/assets/pngimg.com - audi_PNG1736.png" alt="Car" />
        </div>
      </div>

      {/* Booking Form Section */}
      <div className="container booking-section" ref={bookingRef}>
        <BookingForm onSubmit={handleBookingSubmit} />
      </div>

      <br /><br /><br />

      {/* Services Section */}
      <div ref={serviceRef}>
        <Service />
      </div>

      <br /><br /><br />

      {/* CarList/Fleet Section */}
      <div ref={carListRef}>
        <CarList scrollToBooking={() => scrollToSection(bookingRef)} />
      </div>

      <br /><br /><br />

      {/* Footer/Contact Section */}
      <div ref={footerRef}>
        <Footer />
      </div>
    </div>
  );
};

export default Home;