git add app.js
git commit -m "Full pipeline test"
const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello World!Hello,Hello'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
