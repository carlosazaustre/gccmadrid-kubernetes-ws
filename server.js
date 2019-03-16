import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello Madrid");
});

let PORT = process.env.PORT || 9000;

app.listen(PORT, () => console.log("Listening on", PORT));
