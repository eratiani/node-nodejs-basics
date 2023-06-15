const parseArgs = () => {
  const args = process.argv.slice(2);
  console.log(args);
  args.forEach((arg, i) => {
    if ((i + 1) % 2 === 0) return;
    console.log(`${arg.slice(2)} is ${args[i + 1]}`);
  });
  // Write your code here
};

parseArgs();
