import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { CarService } from '../../../services/car.service';
import { useState } from 'react';
import CarItem from '../home/car-item/CarItem';
import { ICar } from '../../../types/car.interface';

const CarDetail = () => {
  const { id } = useParams();
  const [car, setCar] = useState<ICar>({} as ICar);
  const navigate = useNavigate();

  if (!id) return;

  useEffect(() => {
    const fetchData = async () => {
      const response = await CarService.getById(id);

      setCar(response);
    };

    fetchData();
  }, [id]);

  return (
    <div>
      <button
        type="button"
        className="btn"
        style={{ marginBottom: 10 }}
        onClick={() => navigate('/')}
      >
        home page
      </button>
      {car.name ? <CarItem car={car} /> : 'There is no car'}
    </div>
  );
};

// ! Сделать fetch запрос на мио базу д, axios

export default CarDetail;
