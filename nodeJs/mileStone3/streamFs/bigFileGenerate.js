/**
 * Documenter   : Jithendiran
 * Date         : 17-11-2021
 */
const fs = require("fs");

for (let i = 0; i < 10000; i++) {
  fs.writeFile("./big.txt", `hello ${i} \n`, { flag: "a+" }, (err) => {
    if (err) {
      console.error(err);
      return;
    }
  });
}
