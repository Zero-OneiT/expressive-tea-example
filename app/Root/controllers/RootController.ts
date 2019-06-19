import { Get, Route } from '@zerooneit/expressive-tea/decorators/router';
import { Inject } from '@zerooneit/expressive-tea/services/DependencyInjection';

@Route('/')
export default class RootController {
	@Inject('TestService')
	testService;

	@Get('/')
	async index(req, res) {
		res.send('is Working!!');
	}

	@Get('/test')
	async test(req, res) {
		res.json({success: true, message: 'this is working too'});
	}

	@Get('/test/inject')
	async testInject(req, res) {
		res.send(this.testService.test());
	}
}
