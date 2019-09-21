

module.exports = {
	presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-flow'],
	plugins: [
		// adding this one solved the issue
		'@babel/plugin-transform-modules-commonjs',
		'@babel/plugin-proposal-export-default-from',
		'@babel/plugin-proposal-export-namespace-from',
		'@babel/plugin-proposal-class-properties',
		'@babel/plugin-proposal-object-rest-spread'
	]
};