import * as fastify from 'fastify';
import mongoose from 'mongoose';
import routes from './app/routes/api';
import { Options } from './app/config/swagger';
import setting from './env';
import swagger from 'fastify-swagger';
const env = process.env.NODE_ENV;

// Configure HTTP server
const app = fastify.default({ logger: true });

// Register Swagger
app.register(swagger, Options);

// Register Route
routes.forEach(route => {
	app.route(route);
});

const start = async (): Promise<void> => {
	try {
		console.log(setting.PORT);
		await app.listen(setting.PORT);
		app.swagger();
	} catch (err) {
		app.log.error(err);
		process.exit(1);
	}
};
start();

export default app;

// Configure DB
if (env !== 'test') {
	mongoose
		.connect(`mongodb://${setting.DB_HOST}:${setting.DB_PORT}/${setting.DB_NAME}`, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		})
		.then(() => app.log.info('MongoDB connected...'))
		.catch(err => app.log.error(err));
}
