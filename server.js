const express = require('express');
const routes = require('./routes/index.js');
const port = process.env.port || 3000;
const app = express();

app.use('/public', express.static(process.cwd() + '/public'));
app.set('view engine', 'ejs');

routes(app);

app.listen(port, () => {
    console.log('Server Running on port ' + port + '...');
});