import React from 'react';
import { useParams } from 'react-router-dom';
import { Carousel } from 'react-carousel-minimal';
import { faGear  , faGasPump , faGaugeSimpleHigh , faIndianRupeeSign} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 
const cars = [
  {
    car_id: 1,
    car_name: 'Swift',
    car_image: 'img/carstock.jpg', // Replace with the actual image URL
    car_modelyear : '2022',
    car_brand: 'MS',
    car_km:'12999',
    car_fuelType:'Petrol',
    car_transmission:'Automatic',
    car_price: '2,19,000/-',
    car_model:'VXI'
  },
  {
    car_id: 2,
    car_name: 'Swift',
    car_image: 'img/carstock.jpg', // Replace with the actual image URL
    car_modelyear : '2022',
    car_brand: 'MS',
    car_km:'12999',
    car_fuelType:'Petrol',
    car_transmission:'Manual',
    car_price: '2,19,000/-',
    car_model:'VXI'
  },
  // Add more car objects as needed
];

const data = [
  {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GoldenGateBridge-001.jpg/1200px-GoldenGateBridge-001.jpg",
    caption: "San Francisco"
  },
  {
    image: "https://cdn.britannica.com/s:800x450,c:crop/35/204435-138-2F2B745A/Time-lapse-hyper-lapse-Isle-Skye-Scotland.jpg",
    caption: "Scotland"
  },
  {
    image: "https://static2.tripoto.com/media/filter/tst/img/735873/TripDocument/1537686560_1537686557954.jpg",
    caption: "Darjeeling"
  },
];
const slideNumberStyle = {
  fontSize: '20px',
  fontWeight: 'bold',
}


function VehicleDetails() {
  // Use useParams to access the car_id parameter from the URL
  const { car_id } = useParams();

  console.log('VehicleDetails - car_id:', car_id); // Debugging line

  // Replace this with your data retrieval logic
  // Fetch the vehicle details based on the car_id
  const vehicle = cars.find((car) => car.car_id === parseInt(car_id, 10));

  console.log('VehicleDetails - vehicle:', vehicle); // Debugging line

  if (!vehicle) {
    return <div>Vehicle not found.</div>;
  }

  return (
    <div className="vehicle-details">
        <div className='top-column'> 
          <div className='vehicle-text-details'>
            <div className='car_name'> <h1> {vehicle.car_modelyear} {vehicle.car_name} {vehicle.car_model} </h1> </div> 
          </div>
          <div className="vehicle-images"> </div>
            <Carousel
            data={data}
            time={2000}
            width="850px"
            height="500px"
            radius="10px"
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            dots={true}
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
           
            style={{
              textAlign: "center",
              maxWidth: "850px",
              maxHeight: "500px",
              margin: "40px auto",
            }}
          />
        </div>
        <div className='mid-column'>
          <div className='specifications'>
          <div className='car_details'> 
            <div className='car_kms'> 
            <p> <FontAwesomeIcon icon={faGaugeSimpleHigh} /> {vehicle.car_km} km </p>
            </div>

            <div className='car_fuel'> 
            <p> <FontAwesomeIcon icon={faGasPump}/> {vehicle.car_fuelType}  </p>
            </div>

            <div className='car_transmission'> 
            <p> <FontAwesomeIcon icon={faGear}/> {vehicle.car_transmission} </p>
            </div>
          </div>
          </div>
          <div className='inspection'>
          <h1> Vehicle Inspection</h1>

          </div>
          <div className='warrenty'>
          <h1> Vehicle warrenty </h1>

          </div>
        </div>

        <div className='bottom-column'>
          <div className='call-us'>
              <button> call US </button>
          </div>
       
        </div>
    </div>
  );
}

export default VehicleDetails;
