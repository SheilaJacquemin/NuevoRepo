const DriverRating = require('../model/driverRatings');

module.exports = {
  create(req, res) {
    const { id_driver, rating, comment, id_client } = req.body;

    const driverRating = {
      id_driver,
      rating,
      comment,
      id_client,
    };

    DriverRating.createRating(driverRating, (err, data) => {
      if (err) {
        return res.status(500).json({
          message: 'Error al registrar la calificación del conductor',
          error: err.message,
        });
      }

      // Después de crear la calificación, actualiza el promedio en la tabla "conductor"
      DriverRating.SaveRating(id_driver, (updateErr, updateRes) => {
        if (updateErr) {
          return res.status(500).json({
            message: 'Error al actualizar el promedio del conductor',
            error: updateErr.message,
          });
        }

        res.status(201).json({
          message: 'Calificación del conductor registrada exitosamente',
          id: data,
        });
      });
    });
  },

  getAllRating(req, res) {
    DriverRating.getAllRatings((err, data) => {
      if (err) {
        return res.status(500).json({
          message: 'Error al obtener los promedios',
          error: err.message,
        });
      }

      res.status(200).json({
        message: 'Promedios Obtenidos',
        data,
      });
    });
  },
};
