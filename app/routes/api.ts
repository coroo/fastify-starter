import * as carController from '../deliveries/carController';
import { RouteOptions } from 'fastify';
import { AddCarSchema } from '../schemas/carSchema';
import setting from '../../env';

const getCarsRoute: RouteOptions = {
	method: 'GET',
	url: setting.APP_PREFIX + '/cars',
	handler: carController.getCars,
};
const getCarRoute: RouteOptions = {
	method: 'GET',
	url: setting.APP_PREFIX + '/cars/:id',
	handler: carController.getSingleCar,
};
const postCarRoute: RouteOptions = {
	method: 'POST',
	url: setting.APP_PREFIX + '/cars',
	handler: carController.addCar,
	schema: AddCarSchema,
};
const putCarRoute: RouteOptions = {
	method: 'PUT',
	url: setting.APP_PREFIX + '/cars/:id',
	handler: carController.updateCar,
};
const deleteCarRoute: RouteOptions = {
	method: 'DELETE',
	url: setting.APP_PREFIX + '/cars/:id',
	handler: carController.deleteCar,
};

const routes = [getCarsRoute, getCarRoute, postCarRoute, putCarRoute, deleteCarRoute];

export default routes;
