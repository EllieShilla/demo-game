const passwordRoutes = require('./routes/password');
const routes = require('./routes/main');
const secureRoutes = require('./routes/secure');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const passport = require('passport');

const uri = MONGO_CONNECTION_URL;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: false });
mongoose.connection.on('error', (error) => {
  console.log(error);
  process.exit(1);
});
mongoose.connection.on('connected', function () {
  console.log('connected to mongo');
});

// reads in our .env file and makes those values available as environment variables
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
// create an instance of an express app
const app = express();
// update express settings
app.use(bodyParser.urlencoded({ extended: false })); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json

app.use(cookieParser());
// require passport auth
require('./auth/auth');

app.get('/game.html', passport.authenticate('jwt', { session: false }), function (req, res) {
  res.sendFile(__dirname + '/public/game.html');
});

app.use(express.static(__dirname + '/public'));
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

// main routes
app.get('/status', (req, res, next) => {
  res.status(200);
  res.json({ 'status': 'ok' });
});

app.use('/', passwordRoutes);

app.use('/', routes);
app.use('/', passport.authenticate('jwt', { session: false }), secureRoutes);

// catch all other routes
app.use((req, res, next) => {
  res.status(404);
  res.json({ message: '404 - Not Found' });
});

// have the server start listening on the provided port
app.listen(process.env.PORT || 3000, () => {
  console.log('Server listening on http://localhost:3000');
});