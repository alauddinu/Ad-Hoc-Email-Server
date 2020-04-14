import { CoreModule } from './core.module';
import {FaIconLibrary} from "@fortawesome/angular-fontawesome";


describe('CoreModule', () => {
  let footerModule: CoreModule;

  beforeEach(() => {
    footerModule = new CoreModule(new FaIconLibrary());
  });

  it('should create an instance', () => {
    expect(footerModule).toBeTruthy();
  });
});
