import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { CarService } from '../../../../services/car.service';
import { ICarData } from '../../../../types/car.interface';
import styles from './CreateCarForm.module.css';
import useCreateCar from './useCreateCar';

const clearData = {
  price: '',
  name: '',
  image: '',
};

const CreateCarForm = () => {
  const [data, setData] = useState(clearData);

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<ICarData>({
    mode: 'onChange',
  });

  const { createCar } = useCreateCar(reset);

  return (
    <form className={styles.form} onSubmit={handleSubmit(createCar)}>
      <input
        type="text"
        placeholder="Name"
        className={styles.input}
        {...register('name', { required: 'Name is required!' })}
      />

      {/* Error */}
      {errors?.name?.message && <p style={{ color: 'red' }}>Name is required!</p>}

      <input
        type="text"
        placeholder="Price"
        className={styles.input}
        {...register('price', { required: true })}
      />
      <input
        type="text"
        placeholder="Image"
        className={styles.input}
        {...register('image', { required: true })}
      />

      <button className="btn">Create</button>
    </form>
  );
};

export default CreateCarForm;
