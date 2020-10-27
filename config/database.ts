import mongoose from 'mongoose';
import setting from '../env';
const env = process.env.NODE_ENV;

// Configure DB
const database = (app: any) => {
	if (env !== 'test') {
		return mongoose
			.connect(`mongodb://${setting.DB_HOST}:${setting.DB_PORT}/${setting.DB_NAME}`, {
				useNewUrlParser: true,
				useUnifiedTopology: true,
			})
			.then(() => app.log.info('MongoDB connected...'))
			.catch(err => app.log.error(err));
	}
};

export default database;
