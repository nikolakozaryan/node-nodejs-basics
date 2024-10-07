import { createGzip } from "node:zlib";
import { pipeline } from "node:stream";
import { createReadStream, createWriteStream } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const FILES_DIRECTORY = "files";

const SRC_FILE_NAME = "fileToCompress.txt";

const DEST_FILE_NAME = "archive.gz";

const SRC_PATH = resolve(__dirname, FILES_DIRECTORY, SRC_FILE_NAME);

const DEST_PATH = resolve(__dirname, FILES_DIRECTORY, DEST_FILE_NAME);

const compress = async () => {
  const gzip = createGzip();
  const src = createReadStream(SRC_PATH);
  const dest = createWriteStream(DEST_PATH);

  pipeline(src, gzip, dest, (err) => {
    if (err) {
      console.error("An error occurred:", err);
      process.exitCode = 1;
    }
  });
};

await compress();
