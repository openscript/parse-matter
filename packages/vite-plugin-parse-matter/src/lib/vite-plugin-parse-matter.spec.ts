import { parseMatter } from './vite-plugin-parse-matter';
describe('vitePluginParseMatter', () => {
  it('should work', () => {
    expect(parseMatter()).toMatchSnapshot()
  });
});
