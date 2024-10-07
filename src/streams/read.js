import { createReadStream } from "node:fs";
import { resolve } from "node:path";
import { stdout } from "process";
import { __dirname, FILES_DIRECTORY } from "./constants.js";

const FILE_NAME = "fileToRead.txt";

const PATH_TO_FILE = resolve(__dirname, FILES_DIRECTORY, FILE_NAME);

const read = async () => {
  const readStream = createReadStream(PATH_TO_FILE);

  readStream.pipe(stdout);
};

await read();
