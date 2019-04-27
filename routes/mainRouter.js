import createError from 'http-errors';

import indexRoutes from './modules/index';
import userRoutes from './modules/users';
import colectaRoutes from './modules/colecta';
import fundacionRoutes from './modules/fundacion';

function mainRouter (app) {

    app.use('/', indexRoutes);
    app.use('/user', userRoutes);
    app.use('/colecta', colectaRoutes);
    app.use('/fundacion', fundacionRoutes);

    // Error 404
    app.use((req, res, next) => {
        next(createError(404));
    });
  
}

export default mainRouter;