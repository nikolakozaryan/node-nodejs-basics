import { rm } from "fs/promises";
import { resolve } from "path";
import { ERROR_MESSAGE, FILES_DIRECTORY, __dirname } from "./constants.js";

const FILE_NAME = "fileToRemove.txt";

const PATH_TO_FILE = resolve(__dirname, FILES_DIRECTORY, FILE_NAME);

const remove = async () => {
  try {
    await rm(PATH_TO_FILE);
  } catch {
    throw new Error(ERROR_MESSAGE);
  }
};

await remove();
