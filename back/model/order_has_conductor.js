const db=require('../config/config')

const OrderHasProducts={}





OrderHasProducts.create=(id_order,id_conductor,quantity,result)=>{
    const sql= `
    INSERT INTO
        order_has_conductor(
            id_order,
            id_conductor,
            quantity,
            created_at,
            updated_at
        )
    VALUES(?, ?, ?, ?, ?)
    `;

    // voy a realizar la consulta 
    db.query(
        sql,
        [
            id_order,
            id_conductor,
            quantity,
            new Date(),
            new Date(),
        ],
        (err,res) => {
            if(err){
                console.log('Error: ', err)
                result(err,null)
            }
            else{
                console.log('id de la nueva order_has_products: ', res.insertId);
                result(null, res.insertId); // se utiliza para pasar el resultado de la operación 

            }


        }
    )

}



module.exports = OrderHasProducts
