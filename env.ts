import envSchema from 'env-schema';

// Register Environment
const schema = {
	type: 'object',
	required: ['PORT'],
	properties: {
		APP_URL: { type: 'string', default: '127.0.0.1' },
		PORT: { type: 'integer', default: 3000 },
		APP_PREFIX: { type: 'string', default: '/api/v1' },
		DB_HOST: { type: 'string', default: 'localhost' },
		DB_PORT: { type: 'integer', default: 27017 },
		DB_NAME: { type: 'string', default: 'cars' },
		LINK_DOCS: { type: 'string', default: 'docs' },
	},
};

const setting = envSchema({
	schema: schema,
	dotenv: true, // load .env if it's there, default: false
});

export default setting;
