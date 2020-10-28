import * as carController from '../deliveries/carController';
import { RouteOptions } from 'fastify';
import { AddCarSchema } from '../schemas/carSchema';

const getCarsRoute: RouteOptions = {
	method: 'GET',
	url: '/api/cars',
	handler: carController.getCars,
};
const getCarRoute: RouteOptions = {
	method: 'GET',
	url: '/api/cars/:id',
	handler: carController.getSingleCar,
};
const postCarRoute: RouteOptions = {
	method: 'POST',
	url: '/api/cars',
	handler: carController.addCar,
	schema: AddCarSchema,
};
const putCarRoute: RouteOptions = {
	method: 'PUT',
	url: '/api/cars/:id',
	handler: carController.updateCar,
};
const deleteCarRoute: RouteOptions = {
	method: 'DELETE',
	url: '/api/cars/:id',
	handler: carController.deleteCar,
};

const routes = [getCarsRoute, getCarRoute, postCarRoute, putCarRoute, deleteCarRoute];

export default routes;
