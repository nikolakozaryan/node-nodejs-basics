import { createWriteStream } from "node:fs";
import { resolve } from "node:path";
import { stdin } from "process";
import { __dirname, FILES_DIRECTORY } from "./constants.js";

const FILE_NAME = "fileToWrite.txt";

const PATH_TO_FILE = resolve(__dirname, FILES_DIRECTORY, FILE_NAME);

const write = async () => {
  const writeStream = createWriteStream(PATH_TO_FILE, { flags: "a" });

  stdin.pipe(writeStream);
};

await write();
