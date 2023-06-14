const parseEnv = () => {
  const prefix = "RSS_";
  for (const env in process.env) {
    if (variable.startsWith(prefix)) {
      const value = process.env[variable];
      console.log(`${variable} = ${value}`);
    }
  }
  // Write your code here
};

parseEnv();
