import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	compilerOptions: {
		experimental: { async: true }
	},

	kit: {
		experimental: {
			remoteFunctions: true
		},
		adapter: adapter()
	}
};

export default config;
