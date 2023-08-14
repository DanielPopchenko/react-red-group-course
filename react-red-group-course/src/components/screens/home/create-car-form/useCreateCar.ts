import React from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { useMutation } from '@tanstack/react-query';
import { CarService } from '../../../../services/car.service';
import { ICar, ICarData } from '../../../../types/car.interface';
import { SubmitHandler, UseFormReset } from 'react-hook-form';

const useCreateCar = (reset: UseFormReset<ICarData>) => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation(['create car'], (data: ICarData) => CarService.create(data), {
    onSuccess: () => {
      // ! С помощью этой команды react query обновляет состояние без перезагрущки страницы
      // ! react query сам хранит состояние в сервере но нам нужно его дернуть таким образом
      queryClient.invalidateQueries(['cars']);
      reset();
    },
  });

  const createCar: SubmitHandler<ICarData> = (data) => {
    mutate({ ...data });
  };

  return { createCar };
};

export default useCreateCar;
