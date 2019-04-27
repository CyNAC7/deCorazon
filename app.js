import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import exphbs from 'express-handlebars';
import mainRouter from './routes/mainRouter';
import { initDb, getDb } from './services/db'
// Se inicializa la applicacion
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));

// Se establecen las vistas 
app.engine('handlebars', exphbs({
  defaultLayout: 'main',
  partialsDir: __dirname + '/views/partials/'
}));

// Se inicializa handlebars
app.set('view engine', 'handlebars');

// Se configura el sevidor
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Se inicia el enrutador
mainRouter(app);

//Se inicia la base de datos
initDb();



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
