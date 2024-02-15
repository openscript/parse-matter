import { Plugin } from 'vite';
import { parseMatter as parseMatterImplementation } from 'parse-matter';

export function parseMatter(): Plugin {
  return {
    name: 'parse-matter',
    transform: (src, id) => {
      if (!id.endsWith('.md')) {
        return;
      }

      const parsedFrontmatter = parseMatterImplementation(src);

      return {
        code: `export default ${JSON.stringify(parsedFrontmatter)};`,
        map: null
      }
    }
  };
}
