import React from 'react';
import { useQuery } from '@tanstack/react-query';
import CreateCarForm from './create-car-form/CreateCarForm';
import { CarService } from '../../../services/car.service';
import Header from '../../ui/Header';
import Catalog from '../../ui/Catalog';

const Home = () => {
  // ! ['cars'] - обязательно нужен ключ и именно в виду массива
  const { data, isLoading } = useQuery(['cars'], () => CarService.getAll());

  if (isLoading) return <p>Loading ...</p>;

  return (
    <div>
      <h1>Cars catalog</h1>
      <Header />

      <CreateCarForm />

      <Catalog data={data} />
    </div>
  );
};

export default Home;
