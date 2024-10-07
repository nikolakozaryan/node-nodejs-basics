import { fileURLToPath } from "url";
import { dirname } from "path";

export const FILES_DIRECTORY = "files";
export const ERROR_MESSAGE = "FS operation failed";
export const __dirname = dirname(fileURLToPath(import.meta.url));
