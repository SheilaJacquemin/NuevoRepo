const db=require('../config/config')
const bcrypt=require('bcryptjs');
const Conductor={}

Conductor.findByEmail = (email, result) => {
    const sql = `
    SELECT
        P.id, 
        P.name,
        P.description,
        P.email,
        P.password,
        P.price,
        P.patente,
        P.image1,
        P.image2,
        P.image3,
        P.id_empresa,
        JSON_ARRAYAGG(
            JSON_OBJECT(
                'id', CONVERT(R.id, char),
                'name',R.name,
                'image',R.image,
                'route',R.route
            )
        ) AS roles
        FROM
            conductor AS P
        INNER JOIN
            conductor_has_roles AS UHR
        ON 
            UHR.id_conductor = P.id
        INNER JOIN 
            roles AS R
        ON
            UHR.id_rol = R.id
        WHERE
            email=?
        GROUP BY
            P.id
    
    `;
    db.query(
        sql,
        [email],
        (err,conductor) => {
            if(err){
                console.log('Error: ' ,err)
                result(err,null)
            }
            else{
                console.log('Usuario obtenido: ',conductor[0]);
                result(null,conductor[0]) 
                // se utiliza para pasar el resultado de la operación 

            }


        }
         



    )
}

Conductor.findByEmpresa = (id_empresa, result) => {
    const sql = `
    SELECT 
        P.id,
        P.name,
        P.description,
        P.price,
        P.patente,
        P.image1,
        P.image2,
        P.image3,
        P.id_empresa,
        P.average_rating
    FROM 
        conductor as P
    WHERE 
        P.id_empresa = ?
    `;

    db.query(
        sql,
        [id_empresa],
        (err, res) => {
            if(err){
                console.log('Error: ', err)
                result(err,null)
            }
            else{
                console.log('id del nuevo conductor: ', res);
                result(null, res); // se utiliza para pasar el resultado de la operación 

            }
        }
    );
}

Conductor.create=async(conductor,result)=>{

    const hash= await bcrypt.hash(conductor.password,10)
    const sql= `
    INSERT INTO
        conductor(
            name,
            description,
            email,
            password,
            price,
            patente,
            image1,
            image2,
            image3,
            id_empresa,
            created_at,
            updated_at
        )
    VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    // voy a realizar la consulta 
    db.query(
        sql,
        [
            conductor.name,
            conductor.description,
            conductor.email,
            hash,
            conductor.price,
            conductor.patente,
            conductor.image1,
            conductor.image2,
            conductor.image3,
            conductor.id_empresa,
            new Date(),
            new Date()
        ],
        (err,res) => {
            if(err){
                console.log('Error: ', err)
                result(err,null)
            }
            else{
                console.log('id de la nueva conductoro: ', res.insertId);
                result(null, res.insertId); // se utiliza para pasar el resultado de la operación 

            }


        }
    )

}



Conductor.update=(conductor,result)=>{
    const sql=`
    UPDATE
        conductor
    SET
        name = ?,
        description= ?,
        price = ?,
        patente = ?,
        image1= ?,
        image2= ?,
        image3= ?,
        id_empresa= ?,
        updated_at= ?
    WHERE
        id=?
    `;

    db.query(
        sql,[
            conductor.name,
            conductor.description,
            conductor.price,
            conductor.patente,
            conductor.image1,
            conductor.image2,
            conductor.image3,
            conductor.id_empresa,
            new Date(),
            conductor.id
        ],
        (err,res) => {
            if(err){
                console.log('Error: ', err)
                result(err,null)
            }
            else{
                console.log('id de la Empresa actualizada: ', conductor.id);
                result(null, conductor.id); // se utiliza para pasar el resultado de la operación 
            }
        }
    )
}








Conductor.delete=(id,result)=>{
    const sql=`
    DELETE FROM
        conductor
    WHERE 
        id=?
    `;
    db.query(
        sql, 
        id,
        (err,res) => {
            if(err){
                console.log('Error: ', err)
                result(err,null)
            }
            else{
                console.log('id del conductor eliminada: ', id);
                result(null, id); // se utiliza para pasar el resultado de la operación 

            }


        }
    )
}

Conductor.getAll=(result)=>{
    const sql=`
SELECT
    id,
    name,
    description,
    email,
    password,
    price,
    patente,
    image1,
    image2,
    image3,
    id_empresa,
    created_at,
    updated_at
FROM
    conductor
ORDER BY
    name
`;
db.query(
    sql,
    (err,data) => {
        if(err){
            console.log('Error: ', err)
            result(err,null)
        }
        else{
            console.log('id de la nueva conductor: ', data);
            result(null, data); // se utiliza para pasar el resultado de la operación ;  data=las filas que me reotna la consulta , nombre imagen y description
        }
    }
    )
}

module.exports = Conductor
