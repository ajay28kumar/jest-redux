// ... imports or other code up here ...
import envVars from 'preact-cli-plugin-env-vars';

// these props are both optional'
export default () => {
	// process.env.PREACT_APP_ENV_NAME = process.env.PREACT_APP_ENV_NAME ? process.env.PREACT_APP_ENV_NAME : 'dev';
	// envVars(config, env, helpers);
	// config.output.publicPath = process.env.PREACT_APP_BASE_PATH;
	// console.log('Environment : ' + process.env.PREACT_APP_ENV_NAME);
	// console.log('Public path : ' + process.env.PREACT_APP_BASE_PATH);
	// config.resolve = {
	// 	alias: {
	// 		// react: 'preact/compat',
	// 		// 'react-dom': 'preact/compat'
	// 	}
	// };
	// eslint-disable-next-line no-undef
	return {
		resolve: {
			alias: {
				react: 'preact/compat'
			}
		}
	};

};
