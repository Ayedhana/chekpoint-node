var fs = require("fs");

fs.writeFile("welcome.txt", "Hello node!", function (err) {
  if (err) throw err;
  console.log("Saved!");
});




fs.readFile("hello.txt", "utf8", function (err, data) {
  // Display the file content
  console.log(data);
});

