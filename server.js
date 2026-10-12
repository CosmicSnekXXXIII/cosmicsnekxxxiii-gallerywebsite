const express = require('express');
const app = express();
const path = require('path');
const port = 8080;

app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, "public"))); 

app.listen(port, () => {
    console.log("Server running on port 8080")
});

app.get('/', (req, res) => {
  console.log("Hello");
  res.render('index');
});