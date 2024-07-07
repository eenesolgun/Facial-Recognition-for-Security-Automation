const express = require("express");
const fs = require("fs");
const app = express();
const bodyParser = require("body-parser");
const port = 3000;

app.use(bodyParser.raw({ type: "image/jpeg", limit: "10mb" }));

app.post("/upload", (req, res) => {
  const timestamp = Date.now();
  const filePath = `C:\\Users\\eneso\\OneDrive\\Masaüstü\\Photos/photo_${timestamp}.jpg`;

  fs.writeFile(filePath, req.body, (err) => {
    if (err) {
      console.error(err);
      res.status(500).send("Internal Server Error");
    } else {
      console.log(`Uploaded photo saved as ${filePath}`);
      res.status(200).send("OK");
    }
  });
});

app.listen(port, "*********", () => {
  console.log(`Server is listening at http://********:${port}`);
});
