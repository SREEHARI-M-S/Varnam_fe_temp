const express = require('express');
const routes = require('./routes/index.js');
const PORT = process.env.PORT || 3000;
const app = express();

app.use('/public', express.static(process.cwd() + '/public'));
app.set('view engine', 'ejs');

routes(app);

app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});