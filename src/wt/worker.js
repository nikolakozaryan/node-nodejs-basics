import { workerData, parentPort } from "worker_threads";

// n should be received from main thread
const nthFibonacci = (n) => (n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2));

const sendResult = () => {
  // for error demonstration
  if (workerData === 12) {
    throw new Error();
  }

  parentPort.postMessage(nthFibonacci(workerData));
};

sendResult();
