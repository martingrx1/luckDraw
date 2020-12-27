type Path = string;

const JoinPath = (...paths: Path[]): Path => {
  let path = "";
  for (let i = 0, len = paths.length; i < len; i++) {
    if (!paths[i]) continue; //一级item路由路径
    let tp = "/" + paths[i];
    path += tp.replace(/^\/+/g, "/");
  }
  return path;
};

export { JoinPath };
