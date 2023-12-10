
const driverRatingController = require('../controllers/driverRatingController');



module.exports=(app,upload)=>{

    app.get('/api/getAllRating', driverRatingController.getAllRating);

    // Ruta para registrar una calificación de conductor
    app.post('/api/createRating', driverRatingController.create);

}



