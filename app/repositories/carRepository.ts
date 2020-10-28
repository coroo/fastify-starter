import boom from 'boom';
import Car from '../models/Car';
import { Document } from 'mongoose';

export const getCars = async (): Promise<Document[]> => {
	try {
		const cars = await Car.find();
		return cars;
	} catch (err) {
		throw boom.boomify(err);
	}
};

export const getSingleCar = async (id: string) => {
	try {
		const car = await Car.findById(id);
		return car;
	} catch (err) {
		throw boom.boomify(err);
	}
};

export const addCar = async (newData: {}) => {
	try {
		const car = new Car(newData);
		return await car.save();
	} catch (err) {
		throw boom.boomify(err);
	}
};

export const updateCar = async (updateData: {}, id: string) => {
	try {
		const update = await Car.findByIdAndUpdate(id, updateData, { new: true });
		return update;
	} catch (err) {
		throw boom.boomify(err);
	}
};

export const deleteCar = async (id: string) => {
	try {
		const car = await Car.findByIdAndRemove(id);
		return car;
	} catch (err) {
		throw boom.boomify(err);
	}
};
