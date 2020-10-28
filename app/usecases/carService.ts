import boom from 'boom';
import { Document } from 'mongoose';
import * as CarRepository from '../repositories/carRepository';

export const getCars = async (): Promise<Document[]> => {
	try {
		const cars = await CarRepository.getCars();
		return cars;
	} catch (err) {
		throw boom.boomify(err);
	}
};

export const getSingleCar = async (id: string): Promise<Document | null> => {
	try {
		return await CarRepository.getSingleCar(id);
	} catch (err) {
		throw boom.boomify(err);
	}
};

export const addCar = async (newData: {}): Promise<Document | null> => {
	try {
		return await CarRepository.addCar(newData);
	} catch (err) {
		throw boom.boomify(err);
	}
};

export const updateCar = async (updateData: {}, id: string): Promise<Document | null> => {
	try {
		const update = await CarRepository.updateCar(updateData, id);
		return update;
	} catch (err) {
		throw boom.boomify(err);
	}
};

export const deleteCar = async (id: string): Promise<Document | null> => {
	try {
		return await CarRepository.deleteCar(id);
	} catch (err) {
		throw boom.boomify(err);
	}
};
