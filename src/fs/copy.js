import { cp } from "fs/promises";
import { resolve } from "path";
import { ERROR_MESSAGE, FILES_DIRECTORY, __dirname } from "./constants.js";

const SRC = resolve(__dirname, FILES_DIRECTORY);

const DEST = resolve(__dirname, "files_copy");

const copy = async () => {
  try {
    await cp(SRC, DEST, { recursive: true, errorOnExist: true, force: false });
  } catch {
    throw new Error(ERROR_MESSAGE);
  }
};

await copy();
