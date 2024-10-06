import fs from "fs/promises";
import { resolve } from "path";
import { ERROR_MESSAGE, FILES_DIRECTORY, __dirname } from "./constants.js";

const OLD_FILE_NAME = "wrongFilename.txt";

const NEW_FILE_NAME = "properFilename.md";

const DIR_PATH = resolve(__dirname, FILES_DIRECTORY);

const OLD_PATH = resolve(DIR_PATH, OLD_FILE_NAME);

const NEW_PATH = resolve(DIR_PATH, NEW_FILE_NAME);

const rename = async () => {
  try {
    const list = await fs.readdir(DIR_PATH);

    if (list?.includes(NEW_FILE_NAME)) {
      throw new Error();
    }

    await fs.rename(OLD_PATH, NEW_PATH);
  } catch {
    throw new Error(ERROR_MESSAGE);
  }
};

await rename();
