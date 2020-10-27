import envSchema from 'env-schema';

// Register Environment
const schema = {
	type: 'object',
	required: ['PORT'],
	properties: {
		PORT: { type: 'integer', default: 3000 },
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
