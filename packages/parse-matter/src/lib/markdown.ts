import { SplitMarkdown } from './types';

const FRONT_MATTER_TAG = '---';

export function splitMarkdown(markdown: string): SplitMarkdown {
  if(markdown.startsWith(FRONT_MATTER_TAG)) {
    const splitMarkdown = markdown.split(FRONT_MATTER_TAG);

    if (splitMarkdown.length === 3) {
      return { data: splitMarkdown[1], content: splitMarkdown[2].trim()}
    }

    return { data: splitMarkdown[1], content: splitMarkdown.slice(3).join(FRONT_MATTER_TAG).trim()}
  }

  return { content: markdown }
}
