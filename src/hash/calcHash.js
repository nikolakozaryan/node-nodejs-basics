import { createHash } from "crypto";
import { createReadStream } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const FILE_NAME = "fileToCalculateHashFor.txt";

const PATH_TO_FILE = resolve(__dirname, "files", FILE_NAME);

const calculateHash = async () => {
  const hash = createHash("sha256");

  const readStream = createReadStream(PATH_TO_FILE);

  readStream.pipe(hash).setEncoding("hex").pipe(process.stdout);
};

await calculateHash();
