const db = require('../config/config');

const DriverRating = {};

// Función para obtener el promedio de calificaciones de un conductor
DriverRating.getAllRatings = (result) => {
  const sql = `
    SELECT
      id_driver,
      AVG(rating) AS average_rating,
      GROUP_CONCAT(CONCAT(id_client, ':', rating) ORDER BY rating DESC SEPARATOR ', ') AS client_ratings,
      GROUP_CONCAT(comment ORDER BY rating DESC SEPARATOR ', ') AS client_comments,
      GROUP_CONCAT(created_at ORDER BY rating DESC SEPARATOR ', ') AS rating_dates
    FROM
      driver_ratings
    GROUP BY
      id_driver
    ORDER BY
      AVG(rating) DESC;
  `;

  db.query(sql, (err, data) => {
    if (err) {
      console.log('Error: ', err);
      result(err, null);
    } else {
      result(null, data);
    }
  });
};

DriverRating.SaveRating = (id_driver, result) => {
  const sql = `
    UPDATE conductor
    SET average_rating = (
      SELECT AVG(rating) 
      FROM driver_ratings 
      WHERE id_driver = ?
    )
    WHERE id = ?
  `;

  db.query(sql, [id_driver, id_driver], (err, res) => {
    if (err) {
      console.log('Error al actualizar el promedio en conductor: ', err);
      result(err, null);
    } else {
      console.log(`Promedio actualizado para conductor con ID ${id_driver}`);
      result(null, res);
    }
  });
};


// Función para registrar una calificación de conductor
DriverRating.createRating = (driverRating, result) => {
  const sql = `
    INSERT INTO
      driver_ratings (
        id_driver, 
        id_client,
        rating, 
        comment, 
        created_at
        )
    VALUES (?, ?, ?, ?, ?)
  `;
  db.query(
    sql,
    [
      driverRating.id_driver,
      driverRating.id_client,
      driverRating.rating,
      driverRating.comment,
      new Date(),
    ],
    (err, res) => {
      if (err) {
        console.log('Error: ', err);
        result(err, null);
      } else {
        console.log('ID de la nueva calificación: ', res.insertId);
        result(null, res.insertId);
      }
    }
  );
};

module.exports = DriverRating;
