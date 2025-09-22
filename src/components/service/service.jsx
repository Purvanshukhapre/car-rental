import './service.css';

const Service = () => {
  return (
    <section className="steps-section">
      <div className="steps-header">
        <p>Plan your trip now</p>
        <h2>Quick & Easy Car Rental</h2>
      </div>

      <div className="steps-cards">
        <div className="step-card">
          <img src="public/car_1634207.png"/>
          <h3>Select Car</h3>
          <p>
            We offer a wide range of vehicles to meet your needs. Whether you're commuting or heading out of town, we've got the right car for you.
          </p>
        </div>

        <div className="step-card">
          <img src="public/operator_7438023.png"/>
          <h3>Contact Operator</h3>
          <p>
            Friendly and knowledgeable staff are here to help you with questions, bookings, or anything you need before hitting the road.
          </p>
        </div>

        <div className="step-card">
          <img src="public/test-drive_9549460.png"/>
          <h3>Let’s Drive</h3>
          <p>
            Just grab the keys and go! Enjoy a smooth, flexible ride with full support from pick-up to drop-off.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Service;