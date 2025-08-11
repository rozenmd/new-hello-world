/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Bind resources to your worker in `wrangler.jsonc`. After adding bindings, a type definition for the
 * `Env` object can be regenerated with `npm run cf-typegen`.
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

export default {
	async fetch(_request, _env, _ctx): Promise<Response> {
		console.log('hey friend');
		console.log('i just like console logging');
		console.log('this is a test of the console logging system');
		console.log('aaaaa');
		console.log('this is a new line of logging');
		console.log('another line for testing');
		return new Response('Hello, World!');
	},
} satisfies ExportedHandler<Env>;
