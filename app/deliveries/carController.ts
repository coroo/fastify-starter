import boom from 'boom';
import * as CarService from '../usecases/carService';
import { Document } from 'mongoose';

export const getCars = async (req: any, reply: any): Promise<Document[]> => {
	try {
		const cars = await CarService.getCars();
		// reply.send(cars);
		return cars;
	} catch (err) {
		throw boom.boomify(err);
	}
};

export const getSingleCar = async (req: any, reply: any) => {
	try {
		const id = req.params.id;
		// const car = await Car.findById(id);
		const car = await CarService.getSingleCar(id);
		reply.send(car);
		// return car;
	} catch (err) {
		throw boom.boomify(err);
	}
};

export const addCar = async (req: any, reply: any) => {
	try {
		const { ...newData } = req.body;
		return await CarService.addCar(newData);
	} catch (err) {
		throw boom.boomify(err);
	}
};

export const updateCar = async (req: any, reply: any) => {
	try {
		const id = req.params.id;
		const { ...updateData } = req.body;
		const update = await CarService.updateCar(updateData, id);
		return update;
	} catch (err) {
		throw boom.boomify(err);
	}
};

export const deleteCar = async (req: any, reply: any) => {
	try {
		const id = req.params.id;
		const car = await CarService.deleteCar(id);
		return car;
	} catch (err) {
		throw boom.boomify(err);
	}
};
