const express = require('express');
const serveStatic = require('serve-static');

const app = express();

app.use(serveStatic('./', {'index': ['index.html', 'index.htm']}));
// app.use(serveStatic('./', {'index': ['registration.html', 'registration.htm']}));
// app.use(serveStatic('./', {'index': ['login.html', 'login.htm']}));
// app.use(serveStatic('./', {'index': ['base.html', 'base.htm']}));
app.listen(8080, () => {
    console.log('Server running on 8080...');
});