const express = require ("express");
const app = express();
const port = 3000;

//blob stream example
app.use(express.json()); //helps to read json data from request body
app.use(express.urlencoded({ extended: true })); //helps to read form data from request body

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/error", (req, res, next) => {
  return next ( new Error("BROKEN")); // Express will catch this on its own. this will get written in console
});

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!') // custom error message to client. This will be shown on browser, not in console. 
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});


