const express = require('express')
const routes = require('./routes/routes')
const mongoConnect = require('./util/database').mongoConnect

const app = express();
const port = 3000;

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(routes);

mongoConnect(() => {
    app.listen(port)
})
