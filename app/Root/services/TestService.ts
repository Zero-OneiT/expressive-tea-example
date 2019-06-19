import {injectable} from 'inversify';

@injectable()
export default class TestService {
    test() {
        return 'This is a injectable service';
    }
}