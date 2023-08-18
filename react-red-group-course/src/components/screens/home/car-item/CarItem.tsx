import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ICar } from '../../../../types/car.interface';
// import styles from '../Home.module.css';

function CarItem({ car }: { car: ICar }) {
  const navigate = useNavigate();

  return (
    <li key={car.id} className="item">
      <div
        style={{
          backgroundImage: `url(${car.image})`,
        }}
        className="image"
      ></div>
      <div className="info">
        <h2>{car.name}</h2>
        <p>
          {new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            currencyDisplay: 'narrowSymbol',
          }).format(+car.price)}
        </p>
        <button type="button" className="btn" onClick={() => navigate(`/car/${car.id}`)}>
          Learn more
        </button>
      </div>
    </li>
  );
}

export default CarItem;
