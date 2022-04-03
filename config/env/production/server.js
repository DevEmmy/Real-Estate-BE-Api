module.exports = ({ env }) => ({
	url: env('APP_URL'),
	proxy: true,
	app: {
		keys: env.array('APP_KEYS', ['Yd96eyA7ZnEimzNZ,7zm8iACnUSaNUXm/'])
	}
});