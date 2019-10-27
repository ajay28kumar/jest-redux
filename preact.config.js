module.exports = (config ) => {
	config.resolve.alias = Object.assign({}, config.resolve.alias, {
		react: 'preact/compat',
		'react-dom': 'preact/compat'
	});

	return config;
};