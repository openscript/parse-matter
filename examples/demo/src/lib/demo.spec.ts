import { returnMarkdown } from './demo';

describe('demo', () => {
  it('should work', () => {
    expect(returnMarkdown()).toMatchSnapshot();
  });
});
