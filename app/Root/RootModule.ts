import { Module } from '@zerooneit/expressive-tea/decorators/module';
import RootController from './controllers/RootController';

@Module({
	controllers: [RootController],
	mountpoint: '/'
})
export default class SearchModule {}
