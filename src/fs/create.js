import { writeFile } from "fs/promises";
import { resolve } from "path";
import { ERROR_MESSAGE, FILES_DIRECTORY, __dirname } from "./constants.js";

const FILE_NAME = "fresh.txt";

const FILE_CONTENT = "I am fresh and young";

const PATH = resolve(__dirname, FILES_DIRECTORY, FILE_NAME);

const create = async () => {
  try {
    await writeFile(PATH, FILE_CONTENT, { flag: "wx" });
  } catch {
    throw new Error(ERROR_MESSAGE);
  }
};

await create();
