function getSearchParam(name: string) {
  const url = new URL(location.href);
  return url.searchParams.get(name);
}

const SERVER = import.meta.env.VITE_SERVER ?? getSearchParam("server") ?? new URL("/", location.href);

console.log("Connecting to", SERVER);

export { SERVER };
