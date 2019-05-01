import Boot from '@zerooneit/expressive-tea/classes/Boot';
import { BOOT_STAGES } from '@zerooneit/expressive-tea/libs/constants';
import { Plug, ServerSettings, RegisterModule } from '@zerooneit/expressive-tea/decorators/server';
import RootModule from './app/Root/RootModule';

@ServerSettings({
	port: 3001
})

class BootLoader extends Boot {
	@RegisterModule(RootModule)
	async start() {
		super.start();
	}
}

export default new BootLoader().start()
  .catch(error => console.log(error.message));
