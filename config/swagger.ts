import setting from '../env';

export const Options = {
	routePrefix: setting.LINK_DOCS,
	exposeRoute: true,
	swagger: {
		info: {
			title: 'Cars API',
			description: 'Building a blazing fast REST API with Node.js, MongoDB, Fastify and Swagger',
			version: '1.0.0',
		},
		externalDocs: {
			url: 'https://swagger.io',
			description: 'Find more info here',
		},
		host: setting.APP_URL + ':' + setting.PORT,
		schemes: ['http'],
		consumes: ['application/json'],
		produces: ['application/json'],
	},
};
