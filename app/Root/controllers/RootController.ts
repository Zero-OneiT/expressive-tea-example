import { Get, Route } from '@zerooneit/expressive-tea/decorators/router';

@Route('/')
export default class RootController {
	@Get('/')
	async index(req, res) {
		res.send('is Working!!');
	}

	@Get('/test')
	async test(req, res) {
		res.json({success: true, message: 'this is working too'});
	}
}
