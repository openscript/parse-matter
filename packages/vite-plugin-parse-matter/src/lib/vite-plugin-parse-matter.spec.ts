import { vitePluginParseMatter } from './vite-plugin-parse-matter';
describe('vitePluginParseMatter', () => {
  it('should work', () => {
    expect(vitePluginParseMatter()).toMatchSnapshot()
  });
});
