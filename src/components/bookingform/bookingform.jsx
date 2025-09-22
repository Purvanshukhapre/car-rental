import { useState } from 'react';
import './bookingform.css';

const BookingForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    carType: '',
    pickupLocation: '',
    dropoffLocation: '',
    pickupDate: '',
    dropoffDate: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Booking form submitted:', formData);

    if (onSubmit) onSubmit();

    setFormData({
      carType: '',
      pickupLocation: '',
      dropoffLocation: '',
      pickupDate: '',
      dropoffDate: '',
    });
  };

  return (
    <div className="booking-container">
      <h2>Book a car</h2>
      <form className="booking-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>🚘 Select Your Car Type <span>*</span></label>
          <select name="carType" value={formData.carType} onChange={handleChange} required>
            <option value="">Select your car type</option>
            <option value="Audi">Audi A1 S-Line</option>
            <option value="Toyota">Toyota Camry</option>
            <option value="BMW">BMW 320 ModernLine</option>
            <option value="Mercedes">Mercedes-Benz GLK</option>
            <option value="Mustang">Ford Mustang GT</option>
            <option value="Tesla">Tesla Model 3</option>
            <option value="Honda">Honda CR-V</option>
          </select>
        </div>

        <div className="form-group">
          <label>📍 Pick-up <span>*</span></label>
          <select name="pickupLocation" value={formData.pickupLocation} onChange={handleChange} required>
            <option value="">Select pick up location</option>
            <option value="pune">Pune</option>
            <option value="mumbai">Mumbai</option>
            <option value="lonavla">Lonavla</option>
            <option value="goa">Goa</option>
            <option value="nagpur">Nagpur</option>
            <option value="hydrabad">Hydrabad</option>
          </select>
        </div>

        <div className="form-group">
          <label>📍 Drop-off <span>*</span></label>
          <select name="dropoffLocation" value={formData.dropoffLocation} onChange={handleChange} required>
            <option value="">Select drop off location</option>
            <option value="pune">Pune</option>
            <option value="mumbai">Mumbai</option>
            <option value="lonavla">Lonavla</option>
            <option value="goa">Goa</option>
            <option value="nagpur">Nagpur</option>
            <option value="hydrabad">Hydrabad</option>
          </select>
        </div>

        <div className="form-group">
          <label>📅 Pick-up <span>*</span></label>
          <input
            type="date"
            name="pickupDate"
            value={formData.pickupDate}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>📅 Drop-of <span>*</span></label>
          <input
            type="date"
            name="dropoffDate"
            value={formData.dropoffDate}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group full-width">
          <button type="submit">Search</button>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;