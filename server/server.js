//express
const express = require('express');
const app = express();
const port = 3000;

// body-parser registration
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json()
const urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(bodyParser.json({ type: 'application/json' }));

// models initialization
const modelsInit = require('./models_init.js');

modelsInit(app);

const postsRoutes = require('./routes/posts.js')
app.use('/', postsRoutes);

app.listen(port, function () {
  console.log('Example app listening on port 3000!')
})
