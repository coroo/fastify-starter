import boom from 'boom';
import { Document } from 'mongoose';
import { CarRepository } from '../repositories/carRepository';

export class CarService {
	carRepository: CarRepository;
	constructor() {
		this.carRepository = new CarRepository();
	}

	public async getCars(): Promise<Document[]> {
		try {
			console.log("ME SHOMEASASOIO 2 HERE");
			const cars = await this.carRepository.getCars();
			return cars;
		} catch (err) {
			throw boom.boomify(err);
		}
	}

	public async getSingleCar(id: string): Promise<Document | null> {
		try {
			return await this.carRepository.getSingleCar(id);
		} catch (err) {
			throw boom.boomify(err);
		}
	}

	public async addCar(newData: {}): Promise<Document | null> {
		try {
			return await this.carRepository.addCar(newData);
		} catch (err) {
			throw boom.boomify(err);
		}
	}

	public async updateCar(updateData: {}, id: string): Promise<Document | null> {
		try {
			const update = await this.carRepository.updateCar(updateData, id);
			return update;
		} catch (err) {
			throw boom.boomify(err);
		}
	}

	public async deleteCar(id: string): Promise<Document | null> {
		try {
			return await this.carRepository.deleteCar(id);
		} catch (err) {
			throw boom.boomify(err);
		}
	}
}
