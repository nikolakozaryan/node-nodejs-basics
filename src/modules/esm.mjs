import { dirname, sep } from "path";
import { release, version } from "os";
import { createServer as createServerHttp } from "http";
import { fileURLToPath } from "url";
import "./files/c.js";

const PORT = 3000;

const __filename = fileURLToPath(import.meta.url);

const __dirname = dirname(__filename);

const random = Math.random();

const fileUrl = `./files/${random > 0.5 ? "a" : "b"}.json`;

const { default: unknownObject } = await import(fileUrl, { with: { type: "json" } });

const myServer = createServerHttp((_, res) => {
  res.end("Request accepted");
});

console.log(`Release ${release()}
Version ${version()}
Path segment separator is "${sep}"

Path to current file is ${__filename}
Path to current directory is ${__dirname}`);

console.log(unknownObject);

myServer.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}
To terminate it, use Ctrl+C combination`);
});

export { unknownObject, myServer };
