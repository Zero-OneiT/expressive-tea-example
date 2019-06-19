import { Module } from '@zerooneit/expressive-tea/decorators/module';
import RootController from './controllers/RootController';
import TestService from './services/TestService';

@Module({
	controllers: [RootController],
	providers: [TestService],
	mountpoint: '/'
})
export default class SearchModule {}
