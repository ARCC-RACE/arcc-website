import { FragmentPolyfillModule } from './fragment-polyfill.module';

describe('FragmentPolyfillModule', () => {
  let fragmentPolyfillModule: FragmentPolyfillModule;

  beforeEach(() => {
    fragmentPolyfillModule = new FragmentPolyfillModule();
  });

  it('should create an instance', () => {
    expect(fragmentPolyfillModule).toBeTruthy();
  });
});
