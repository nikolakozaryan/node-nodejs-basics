import { argv } from "process";

const parseArgs = () => {
  const res = [];

  for (let i = 0; i < argv.length; i++) {
    if (argv[i].startsWith("--")) {
      res.push(`${argv[i].replace("--", "")} is ${argv[i + 1]}`);
      i++;
    }
  }

  console.log(res.join(", "));
};

parseArgs();
