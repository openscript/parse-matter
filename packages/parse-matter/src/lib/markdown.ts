import { SplitMarkdown } from './types';

const FRONT_MATTER_TAG = '---';

export function splitMarkdown(markdown: string): SplitMarkdown {
  const splitMarkdown = markdown.split(FRONT_MATTER_TAG);

  if(splitMarkdown.length < 2) {
    return { content: markdown }
  }

  if(splitMarkdown.length === 1) {
    return { data: splitMarkdown[0], content: splitMarkdown[1].trim()}
  }

  return { data: splitMarkdown[1], content: splitMarkdown.slice(2).join(FRONT_MATTER_TAG).trim()}
}
