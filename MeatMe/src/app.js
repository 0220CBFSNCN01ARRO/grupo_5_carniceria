const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const methodOverride =  require('method-override');
var session = require ('express-session')
var auth = require('./middlewares/auth')

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const productRouter = require('./routes/product');

var usersApiRouter = require('./routes/api/apiUsers')

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//Middlewares
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));
app.use(methodOverride('_method'));
app.use(
  session({
    secret:'algo le tenemos que pasar',
    resave: false,
    saveUninitialized: true
  })
);
app.use(auth);

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/product', productRouter);

app.use('/api/apiUsers' ,usersApiRouter);

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
