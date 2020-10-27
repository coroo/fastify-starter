import boom from 'boom';
import Car from '../models/Car';
import { Document } from 'mongoose';
import { ServerResponse } from 'http';

export const getCars = async (req: any, reply: any): Promise<Document[]> => {
	try {
		const cars = await Car.find();
		reply.send(cars);
		return cars;
	} catch (err) {
		throw boom.boomify(err);
	}
};

export const getSingleCar = async (req: any, reply: any) => {
	try {
		const id = req.params.id;
		const car = await Car.findById(id);
		return car;
	} catch (err) {
		throw boom.boomify(err);
	}
};

export const addCar = async (req: any, reply: any) => {
	try {
		const car = new Car(req.body);
		return await car.save();
	} catch (err) {
		throw boom.boomify(err);
	}
};

export const updateCar = async (req: any, reply: any) => {
	try {
		const id = req.params.id;
		const car = req.body;
		const { ...updateData } = car;
		const update = await Car.findByIdAndUpdate(id, updateData, { new: true });
		return update;
	} catch (err) {
		throw boom.boomify(err);
	}
};

export const deleteCar = async (req: any, reply: any) => {
	try {
		const id = req.params.id;
		const car = await Car.findByIdAndRemove(id);
		return car;
	} catch (err) {
		throw boom.boomify(err);
	}
};
