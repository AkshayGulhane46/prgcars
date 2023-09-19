import React from 'react'
import { faGear  , faGasPump , faGaugeSimpleHigh , faIndianRupeeSign} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { BrowserRouter as Router, Route, Switch, Routes , Link} from 'react-router-dom';
import VehicleDetails from './VehicleDetails'; // Import your VehicleDetails component


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
function Home() {
  return (
   <>
    <div className="car-listing">
    <h1>Newley Added Cars</h1>
    <div className="cars">
      {cars.map((car) => (
        <div key={car.id} className="car">
          <div className='car_image'><img src={car.car_image}  alt={car.name} />  </div>
          <div className='car_name'> <h2> {car.car_modelyear} {car.car_name} {car.car_model} </h2> </div> 
          <div className='car_details'> 
            <div className='car_kms'> 
            <p> <FontAwesomeIcon icon={faGaugeSimpleHigh} /> {car.car_km} km </p>
            </div>

            <div className='car_fuel'> 
            <p> <FontAwesomeIcon icon={faGasPump}/> {car.car_fuelType}  </p>
            </div>

            <div className='car_transmission'> 
            <p> <FontAwesomeIcon icon={faGear}/> {car.car_transmission} </p>
            </div>
          </div>
        
          <div className='car_price'> <p> <FontAwesomeIcon icon={faIndianRupeeSign}/>  {car.car_price}</p></div>

          <Link to={`/vehicle/${car.car_id}`}>
            <button className="enquire-button">More Details...</button>
          </Link>
        </div>
      ))}
    </div>  
  </div>

  </>
  )
}

export  default Home 