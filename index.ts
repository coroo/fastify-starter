import * as fastify from 'fastify';
import routes from './app/routes/api';
import database from './config/database';
import { Options } from './config/swagger';
import setting from './env';
import swagger from 'fastify-swagger';

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

database(app);
