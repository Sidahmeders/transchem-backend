export default {
	routePrefix: '/docs',
	exposeRoute: true,
	swagger: {
		info: {
			title: 'TransChem Backend APIs',
			description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna',
			version: '1.0.0'
		},
		externalDocs: {
			url: 'https://swagger.io',
			description: 'Find more info here'
		},
		host: 'localhost:5000',
		schemes: ['http', 'https'],
		consumes: ['application/json'],
		produces: ['application/json']
	}
}