
module.exports = {
	plugins: [
        '@babel/plugin-transform-modules-commonjs',
        ['@babel/preset-env', {targets: {node: 'current'}}],
	]
};