const express = require('express');
const expressLayouts = require('express-ejs-layouts');

const app = express();





const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`Server running on  localhost:${PORT}`));