export function vitePluginParseMatter() {
  const virtualModuleId = 'virtual:parse-matter';
  const resolvedVirtualModuleId = '\0' + virtualModuleId;

  return {
    name: 'parse-matter',
    resolveId(id: string) {
      if (id === virtualModuleId) {
        return resolvedVirtualModuleId;
      }
      return undefined;
    },
    load(id: string) {
      if (id === resolvedVirtualModuleId) {
        return `export const msg = "from virtual module"`;
      }
      return undefined;
    },
  };
}
