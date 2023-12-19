import { DocumentOptions, ParseOptions as YAMLParseOptions, SchemaOptions, ToJSOptions } from 'yaml'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type MarkdownWithFrontMatter =  { data?: Record<string, any>, content: string }
export type SplitMarkdown = { data?: string, content: string }
export type ParseOptions = YAMLParseOptions & DocumentOptions & SchemaOptions & ToJSOptions
