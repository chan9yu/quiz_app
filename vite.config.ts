import react, { BabelOptions } from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';

const babelOptions: BabelOptions = {
	plugins: ['babel-plugin-styled-components']
};

const userConfig = defineConfig({
	base: '/quiz_app',
	server: {
		port: 3035,
		host: '127.0.0.1',
	},
	plugins: [react({ babel: babelOptions })],
	test: {
    globals: true,
    environment: 'jsdom',
		setupFiles: "./tests/setup.ts",
	}
});

export default userConfig;
