import { createUnzip } from "node:zlib";
import { pipeline } from "node:stream";
import { createReadStream, createWriteStream } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const FILES_DIRECTORY = "files";

const __dirname = dirname(fileURLToPath(import.meta.url));

const SRC_FILE_NAME = "archive.gz";

const DEST_FILE_NAME = "fileToCompress.txt";

const SRC_PATH = resolve(__dirname, FILES_DIRECTORY, SRC_FILE_NAME);

const DEST_PATH = resolve(__dirname, FILES_DIRECTORY, DEST_FILE_NAME);

const decompress = async () => {
  const unzip = new createUnzip();
  const src = createReadStream(SRC_PATH);
  const dest = createWriteStream(DEST_PATH);

  pipeline(src, unzip, dest, (err) => {
    if (err) {
      console.error("An error occurred:", err);
      process.exitCode = 1;
    }
  });
};

await decompress();
