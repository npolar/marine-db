import path from "path";

export async function load(modulepath) {
  modulepath = path.resolve("src/" + modulepath);
  const module = await import(modulepath);
  return module;
}

export async function loadModules(paths) {
  return Promise.all(paths.map(p => load(p)));
}
