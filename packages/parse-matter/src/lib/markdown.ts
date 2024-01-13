import { SplitMarkdown } from './types';

const FRONT_MATTER_TAG = '---';

export function splitMarkdown(markdown: string): SplitMarkdown {
  const splitMarkdown = markdown.split(FRONT_MATTER_TAG);

  if(markdown.startsWith(FRONT_MATTER_TAG)) {

    if (splitMarkdown.length === 3) {
      return { data: splitMarkdown[1], content: splitMarkdown[2].trim()}
    }

    return { data: splitMarkdown[1], content: splitMarkdown.slice(2).join(FRONT_MATTER_TAG).trim()}
  } else if(splitMarkdown.length > 1) {
    return { data: splitMarkdown[0], content: splitMarkdown.slice(1).join(FRONT_MATTER_TAG).trim()}
  }

  return { content: markdown }
}
