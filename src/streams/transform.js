import { stdin, stdout } from "process";
import { Transform, pipeline } from "node:stream";

const transform = async () => {
  const transformStream = new Transform({
    transform(chunk, _, callback) {
      const reversed = String(chunk).split("").reverse().join("");

      callback(null, `${reversed}\n`);
    },
  });

  pipeline(stdin, transformStream, stdout, (err) => {
    if (err) {
      console.error("Pipeline failed.", err);
    } else {
      console.log("Pipeline succeeded.");
    }
  });
};

await transform();
