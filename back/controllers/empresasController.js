const Empresa = require('../model/empresa')

// como voy a subir la imagen voy  a utilizar storage 
const storage = require('../utils/cloud_storage')

module.exports = {

    findByUser(req,res){
        const id_user= req.params.id_user;

        Empresa.findByUser(id_user, (err, data) => {
            
            if (err) {
                return res.status(501).json({
                    success: false, //tipo de repuesta porque es una respuesta no exitosa
                    message: 'Hubo un error al tratar de obtener las direcciones ',
                    error: err
                });
            }
            
            return res.status(201).json(data)



        })
    },

    // metodo asincrono
    async  getAll(req,res){
        // voy a resibir un parametro el error o  la data

        Empresa.getAll((err,data)=>{
            if (err) {
                return res.status(501).json({
                    success: false, //tipo de repuesta porque es una respuesta no exitosa
                    message: 'Hubo un error al listar eñ Perfil de Empresa  ',
                    error: err
                })
            }

           return res.status(201).json(data);  //rtetorno la lista de pérfil de empresas

        })
    },

    // metodo para almacenar los datos del usuario y imagen
    async create(req, res) {

        //    voy  a recibir una categoria 

        const empresa =(req.body) // de esta manera capturo los datos que me envie el cliente




        // para almacenar la imagen 
        // esto son los archivos que me va a enviar los usuarios 
        const files = req.files
        if (files.length > 0) {
            const path = `image_${Date.now()}`; //nombre con el cual se va a crear el archivoen firebase el cual no se va a repetir 
            const url = await storage(files[0], path) //le vamos a enviar la imagen del usuario que esta en la poscion cero que es la unica

            if (url != undefined && url != null) {
                // si se cumple la condicion al modelo user le vamos a agrtegar el campo image 

                empresa.image = url


            }
        }


        //    utilizo el mondelo empresa para utilizar el metodo create pasandole una empresaa 
        Empresa.create(empresa, (err, id) => {



            if (err) {
                return res.status(501).json({
                    success: false, //tipo de repuesta porque es una respuesta no exitosa
                    message: 'Hubo un error con la creacion de la Empresa  ',
                    error: err
                })
            }


            //si no hubol un error vamos a retornar una respuesta faborable
            return res.status(200).json({
                success: true, //tipo de repuesta porque es una respuesta exitosa
                message: 'La Empresa se registro correctamente',
                data: `${id}` // voy a retornar el id de la categoria
            })





        })
    },


    async updateWithImage(req, res) {

        //    voy  a recibir una categoria 

        const empresa = JSON.parse(req.body.empresa) // de esta manera capturo los datos que me envie el cliente




        // para almacenar la imagen 
        // esto son los archivos que me va a enviar los usuarios 
        const files = req.files
        if (files.length > 0) {
            const path = `image_${Date.now()}`; //nombre con el cual se va a crear el archivoen firebase el cual no se va a repetir 
            const url = await storage(files[0], path) //le vamos a enviar la imagen del usuario que esta en la poscion cero que es la unica

            if (url != undefined && url != null) {
                // si se cumple la condicion al modelo user le vamos a agrtegar el campo image 

                empresa.image = url


            }
        }


        //    utilizo el mondelo empresa para utilizar el metodo create pasandole una empresaa 
        Empresa.update(empresa, (err, id) => {



            if (err) {
                return res.status(501).json({
                    success: false, //tipo de repuesta porque es una respuesta no exitosa
                    message: 'Hubo un error con la actualizacion de la Empresa  ',
                    error: err
                })
            }


            //si no hubol un error vamos a retornar una respuesta faborable
            return res.status(201).json({
                success: true, //tipo de repuesta porque es una respuesta exitosa
                message: 'La Empresa se actualizo correctamente',
                data: `${id}` // voy a retornar el id de la categoria
            })





        })
    },

    async update(req, res) {

        //    voy  a recibir una categoria 

        const empresa = req.body  // de esta manera capturo los datos que me envie el cliente

        console.log('Empresa:',empresa);

        //    utilizo el mondelo empresa para utilizar el metodo create pasandole una empresaa 
        Empresa.update(empresa, (err, id) => {



            if (err) {
                return res.status(501).json({
                    success: false, //tipo de repuesta porque es una respuesta no exitosa
                    message: 'Hubo un error con la actualizacion de la Empresa  ',
                    error: err
                })
            }


            //si no hubol un error vamos a retornar una respuesta faborable
            return res.status(201).json({
                success: true, //tipo de repuesta porque es una respuesta exitosa
                message: 'La Empresa se actualizo correctamente',
                data: `${id}` // voy a retornar el id de la categoria
            })





        })
    },




    async delete(req,res){
        const id=req.params.id  //tengo el id de la categoria que voy a llamara empresa
        Empresa.delete(id,(err,data)=>{
            if (err) {
                return res.status(501).json({
                    success: false, //tipo de repuesta porque es una respuesta no exitosa
                    message: 'Hubo un error al iliminar una Empresa  ',
                    error: err
                })
            }

            return res.status(201).json({
                success: true, //tipo de repuesta porque es una respuesta exitosa
                message: 'La Empresa se elimino correctamente',
                data: `${id}` // voy a retornar el id de la categoria
            })

        })
    }


}