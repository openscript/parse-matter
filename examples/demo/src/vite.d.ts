declare module '*.md' {
  const content: string;
  const data: Record<string, unknown>;

  export { content, data };
}
