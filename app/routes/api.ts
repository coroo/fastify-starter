import * as carsController from '../deliveries/carsController';
import { RouteOptions } from 'fastify';
import { AddCarSchema } from '../schemas/carSchema';

const getCarsRoute: RouteOptions = {
	method: 'GET',
	url: '/api/cars',
	handler: carsController.getCars,
};
const getCarRoute: RouteOptions = {
	method: 'GET',
	url: '/api/cars/:id',
	handler: carsController.getSingleCar,
};
const postCarRoute: RouteOptions = {
	method: 'POST',
	url: '/api/cars',
	handler: carsController.addCar,
	schema: AddCarSchema,
};
const putCarRoute: RouteOptions = {
	method: 'PUT',
	url: '/api/cars/:id',
	handler: carsController.updateCar,
};
const deleteCarRoute: RouteOptions = {
	method: 'DELETE',
	url: '/api/cars/:id',
	handler: carsController.deleteCar,
};

const routes = [getCarsRoute, getCarRoute, postCarRoute, putCarRoute, deleteCarRoute];

export default routes;
