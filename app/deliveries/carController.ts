import boom from 'boom';
import { CarService } from '../usecases/carService';

export class CarController {
	carService: CarService;
	constructor() {
		this.carService = new CarService();
	}

	public async getCars(_req: any, res: any) {
		try {
			console.log("ME SHOMEASASOIO 1 HERE");
			const cars = await this.carService.getCars();
			res.send(cars);
		} catch (err) {
			throw boom.boomify(err);
		}
	}

	public async getSingleCar(req: any, res: any) {
		try {
			const id = req.params.id;
			const car = await this.carService.getSingleCar(id);
			res.send(car);
		} catch (err) {
			throw boom.boomify(err);
		}
	}

	public async addCar(req: any, res: any) {
		try {
			const { ...newData } = req.body;
			return await this.carService.addCar(newData);
		} catch (err) {
			throw boom.boomify(err);
		}
	}

	public async updateCar(req: any, res: any) {
		try {
			const id = req.params.id;
			const { ...updateData } = req.body;
			const update = await this.carService.updateCar(updateData, id);
			return update;
		} catch (err) {
			throw boom.boomify(err);
		}
	}

	public async deleteCar(req: any, res: any) {
		try {
			const id = req.params.id;
			const car = await this.carService.deleteCar(id);
			return car;
		} catch (err) {
			throw boom.boomify(err);
		}
	}
}
