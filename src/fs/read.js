import { readFile } from "fs/promises";
import { resolve } from "path";
import { ERROR_MESSAGE, FILES_DIRECTORY, __dirname } from "./constants.js";

const FILE_NAME = "fileToRead.txt";

const PATH = resolve(__dirname, FILES_DIRECTORY, FILE_NAME);

const read = async () => {
  try {
    const fileContent = await readFile(PATH, { encoding: "utf8" });
    console.log(fileContent);
  } catch {
    throw new Error(ERROR_MESSAGE);
  }
};

await read();
