    const db=require('../config/config')

    const Empresa={}



    // metodo para mostrar las empresas 

    Empresa.findByUser = (id_user, result) => {
        const sql = `
            SELECT
                id,
                name,
                description,
                image,
                email,
                phone,
                lat,
                lng
            FROM
                empresas
            WHERE
                id_user = ?
            ORDER BY
                name
        `;
    
        db.query(sql, id_user, (err, data) => {
            if (err) {
                console.log('Error: ', err);
                result(err, null);
            } else {
                result(null, data);
            }
        });
    };
    

    Empresa.getAll=(result)=>{
        const sql=`
    SELECT
        id,
        name,
        description,
        image,
        email,
        phone,
        lat,
        lng
    FROM
        empresas
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
                console.log('id de la nueva Empresaria: ', data);
                result(null, data); // se utiliza para pasar el resultado de la operación ;  data=las filas que me reotna la consulta , nombre imagen y description
            }
        }
        )
    }

    Empresa.create=(empresa,result, id_user)=>{
        const sql= `
        INSERT INTO
            empresas(
                name,
                description,
                image,
                email,
                phone,
                lat,
                lng,
                id_user,
                created_at,
                updated_at
            )
        VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `;

        // voy a realizar la consulta 
        db.query(
            sql,
            [
                empresa.name,
                empresa.description,
                empresa.image,
                empresa.email,
                empresa.phone,
                empresa.lat,
                empresa.lng,
                empresa.id_user,
                new Date(),
                new Date()
            ],
            (err,res) => {
                if(err){
                    console.log('Error: ', err)
                    result(err,null)
                }
                else{
                    console.log('id de la nueva empresa: ', res.insertId);
                    result(null, res.insertId); // se utiliza para pasar el resultado de la operación 

                }


            }
        )

    }



    Empresa.update=(empresa,result)=>{
        const sql=`
        UPDATE
            empresas
        SET
            name = ?,
            description= ?,
            image= ?,
            email= ?,
            phone= ?,
            updated_at= ?
        WHERE
            id=?
        `;

        db.query(
            sql,[
                empresa.name,
                empresa.description,
                empresa.image,
                empresa.email,
                empresa.phone,
                new Date(),
                empresa.id
            ],
            (err,res) => {
                if(err){
                    console.log('Error: ', err)
                    result(err,null)
                }
                else{
                    console.log('id de la Empresa actualizada: ', empresa.id);
                    result(null, empresa.id); // se utiliza para pasar el resultado de la operación 
                }
            }
        )
    }








    Empresa.delete=(id,result)=>{
        const sql=`
        DELETE FROM
            empresas 
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
                    console.log('id de la empresa eliminada: ', id);
                    result(null, id); // se utiliza para pasar el resultado de la operación 

                }


            }
        )
    }

    module.exports = Empresa
