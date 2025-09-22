import './carlist.css';
import { useState } from 'react';

const cars = [
  {
    name: "Audi A1 S-Line",
    image: "src/assets/pngimg.com - audi_PNG1741.png",
    price: 45,
    details: {
      mark: "Audi",
      model: "A1 S-Line",
      year: 2020,
      doors: "4/5",
      ac: "Yes",
      transmission: "Manual",
      fuel: "Gasoline"
    }
  },
  {
    name: "Toyota Camry",
    image: "src/assets/pngegg.png",
    price: 30,
    details: {
      mark: "Toyota",
      model: "Camry",
      year: 2006,
      doors: "4/5",
      ac: "Yes",
      transmission: "Automatic",
      fuel: "Hybrid"
    }
  },
  {
    name: "BMW 320 ModernLine",
    image: "src/assets/Blue_Bmw_320i_2013_Car_PNG_Clipart-109.png",
    price: 55,
    details: {
      mark: "BMW",
      model: "320 ModernLine",
      year: 2021,
      doors: "4/5",
      ac: "Yes",
      transmission: "Automatic",
      fuel: "Diesel"
    }
  },
  {
    name: "Mercedes-Benz GLK",
    image: "src/assets/pngimg.com - mercedes_PNG1903.png",
    price: 60,
    details: {
      mark: "Mercedes",
      model: "GLK",
      year: 2019,
      doors: "4/5",
      ac: "Yes",
      transmission: "Automatic",
      fuel: "Diesel"
    }
  },
    {
    name: "Ford Mustang GT",
    image: "src/assets/pngimg.com - mustang_PNG15.png",
    price: 70,
    details: {
      mark: "Ford",
      model: "Mustang GT",
      year: 2022,
      doors: "2",
      ac: "Yes",
      transmission: "Manual",
      fuel: "Gasoline"
    }
  },
  {
    name: "Tesla Model 3",
    image: "src/assets/pngimg.com - tesla_car_PNG41.png",
    price: 65,
    details: {
      mark: "Tesla",
      model: "Model 3",
      year: 2023,
      doors: "4",
      ac: "Yes",
      transmission: "Automatic",
      fuel: "Electric"
    }
  },
  {
    name: "Honda CR-V",
    image: "src/assets/pngimg.com - honda_PNG102934.png",
    price: 40,
    details: {
      mark: "Honda",
      model: "CR-V",
      year: 2021,
      doors: "4/5",
      ac: "Yes",
      transmission: "Automatic",
      fuel: "Gasoline"
    }
  }

];

const CarList = ({ scrollToBooking }) => {

  const [selectedCar, setSelectedCar] = useState(cars[0]);

  return (
    <section className="fleet-section">
      <div className="fleet-header">
        <p>Vehicle Models</p>
        <h2>Our Rental Fleet</h2>
        <p className="subtext">Choose from a variety of our amazing vehicles to rent for your next adventure or business trip.</p>
      </div>

      <div className="fleet-content">
        <ul className="car-list">
          {cars.map((car, index) => (
            <li
              key={index}
              className={selectedCar.name === car.name ? 'active' : ''}
              onClick={() => setSelectedCar(car)}
            >
              {car.name}
            </li>
          ))}
        </ul>

        <div className="car-image">
          <img src={selectedCar.image} alt={selectedCar.name} />
        </div>

        <div className="car-details-card">
          <div className="price">
            <strong className='text-price'>${selectedCar.price}</strong> <span id='text'>/ rent per day</span>
          </div>
          <table>
            <tbody>
              <tr>
                <td className='text-tag'>Model</td>
                <td className='text-tag'>{selectedCar.details.model}</td>
              </tr>
              <tr>
                <td className='text-tag'>Mark</td>
                <td className='text-tag'>{selectedCar.details.mark}</td>
              </tr>
              <tr>
                <td className='text-tag'>Year</td>
                <td className='text-tag'>{selectedCar.details.year}</td>
              </tr>
              <tr>
                <td className='text-tag'>Doors</td>
                <td className='text-tag'>{selectedCar.details.doors}</td>
              </tr>
              <tr>
                <td className='text-tag'>AC</td>
                <td className='text-tag'>{selectedCar.details.ac}</td>
              </tr>
              <tr>
                <td className='text-tag'>Transmission</td>
                <td className='text-tag'>{selectedCar.details.transmission}</td>
              </tr>
              <tr>
                <td className='text-tag'>Fuel</td>
                <td className='text-tag'>{selectedCar.details.fuel}</td>
              </tr>
            </tbody>
          </table>
          <button onClick={scrollToBooking}>Reserve Now</button>
        </div>
      </div>
    </section>
  )
}

export default CarList;