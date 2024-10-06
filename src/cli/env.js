import { env } from "process";

const parseEnv = () => {
  const res = Object.entries(env)
    .reduce((acc, [key, value]) => {
      if (key.startsWith("RSS_")) {
        acc.push(`${key}=${value}`);
      }

      return acc;
    }, [])
    .join("; ");

  console.log(res);
};

parseEnv();
