import boom from 'boom';
import Car from '../models/Car';
import { Document } from 'mongoose';

export class CarRepository {
	public async getCars(): Promise<Document[]> {
		try {
			const cars = await Car.find();
			return cars;
		} catch (err) {
			throw boom.boomify(err);
		}
	}

	public async getSingleCar(id: string): Promise<Document | null> {
		try {
			const car = await Car.findById(id);
			return car;
		} catch (err) {
			throw boom.boomify(err);
		}
	}

	public async addCar(newData: {}): Promise<Document | null> {
		try {
			const car = new Car(newData);
			return await car.save();
		} catch (err) {
			throw boom.boomify(err);
		}
	}

	public async updateCar(updateData: {}, id: string): Promise<Document | null> {
		try {
			const update = await Car.findByIdAndUpdate(id, updateData, { new: true });
			return update;
		} catch (err) {
			throw boom.boomify(err);
		}
	}

	public async deleteCar(id: string): Promise<Document | null> {
		try {
			const car = await Car.findByIdAndRemove(id);
			return car;
		} catch (err) {
			throw boom.boomify(err);
		}
	}
}
