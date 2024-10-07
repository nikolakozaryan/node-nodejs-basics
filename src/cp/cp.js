import { spawn } from "node:child_process";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { stdin, stdout } from "node:process";

const __dirname = dirname(fileURLToPath(import.meta.url));

const PATH_TO_FILE = resolve(__dirname, "files", "script.js");

const spawnChildProcess = async (args) => {
  const childProcess = spawn("node", [PATH_TO_FILE, ...args]);

  childProcess.stdout.pipe(stdout);

  stdin.pipe(childProcess.stdin);
};

// Put your arguments in function call to test this functionality
spawnChildProcess([1, 2, 3, 4, 5]);
