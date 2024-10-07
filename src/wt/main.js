import { Worker } from "node:worker_threads";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import os from "node:os";

const __dirname = dirname(fileURLToPath(import.meta.url));
const PATH_TO_WORKER = resolve(__dirname, "worker.js");

const performCalculations = async () => {
  const promiseArr = os
    .cpus()
    .map((_, index) => index + 10)
    .map(
      (workerData) =>
        new Promise((resolve, reject) => {
          const worker = new Worker(PATH_TO_WORKER, {
            workerData,
          });

          worker.on("message", (data) => {
            resolve({ status: "resolved", data });
          });

          worker.on("error", () => reject({ status: "error", data: null }));
        }),
    );

  const result = (await Promise.allSettled(promiseArr)).map((res) => res.value || res.reason);

  console.log(result);
};

await performCalculations();
