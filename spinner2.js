const animation = ["\r|   ", "\r/   ", "\r-   ", "\r\\   ", "\r|  "];
let delay = 100;
for (let i of animation) {
  setTimeout(() => {
    process.stdout.write(i);
  }, delay);
  delay += 200;
}
