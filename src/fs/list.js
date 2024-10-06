import { readdir } from "fs/promises";
import { resolve } from "path";
import { ERROR_MESSAGE, FILES_DIRECTORY, __dirname } from "./constants.js";

const PATH = resolve(__dirname, FILES_DIRECTORY);

const list = async () => {
  try {
    const list = await readdir(PATH);
    console.log(list);
  } catch {
    throw new Error(ERROR_MESSAGE);
  }
};

await list();
