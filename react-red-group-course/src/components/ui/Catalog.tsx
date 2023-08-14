import React from 'react';
import { FC } from 'react';
import CarItem from '../screens/home/car-item/CarItem';
import styles from '../screens/home/Home.module.css';
import { ICar } from '../../types/car.interface';

interface ICatalog {
  data?: ICar[];
}

const Catalog: FC<ICatalog> = ({ data = [] }) => {
  return (
    <ul className={styles.carsList}>
      {data.length ? (
        data.map((car) => <CarItem key={car.id} car={car} />)
      ) : (
        <p>There are no cars</p>
      )}
    </ul>
  );
};

export default Catalog;
