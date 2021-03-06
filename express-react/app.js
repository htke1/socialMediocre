var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var mongoose = require('mongoose');
var mongoDB = 'mongodb+srv://data:Gaara@123@cluster0.krqhz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var notifRouter = require('./routes/notifications')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join('public')));

mongoose.connect(mongoDB, { useNewUrlParser: true , useUnifiedTopology: true})

const db = mongoose.connection;

db.on('error', err => console.error(err));
db.once('open', () => console.log("connected"));

app.use('/users', usersRouter);
app.use('/notifications', notifRouter);
app.use('/', indexRouter);  



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
