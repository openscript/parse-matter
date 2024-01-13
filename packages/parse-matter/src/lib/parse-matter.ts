import { parse } from "yaml";
import { MarkdownWithFrontMatter, ParseOptions } from './types';
import { splitMarkdown } from './markdown';

export function parseMatter(markdown: string, options?: ParseOptions): MarkdownWithFrontMatter {
  const split = splitMarkdown(markdown);

  if (!split.data) {
    return { content: split.content }
  }

  try {
    return { data: parse(split.data, options), content: split.content }
  } catch (error) {
    console.error("Couldn't parse frontmatter.")
  }

  return { content: markdown }
}
