const Conductor = require('../model/conductor')
const storage = require('../utils/cloud_storage')
const asyncForEach = require('../utils/async_foreach')
const bcrypt=require('bcryptjs');
const Rol = require('../model/rol')
const User = require('../model/user')


module.exports = {


    login(req, res) {
        const { email, password } = req.body;
        Conductor.findByEmail(email, (err, conductor) => {
            if (err) {
                return res.status(500).json({ success: false, message: 'Error en el servidor', error: err });
            }
            if (!conductor) {
                return res.status(404).json({ success: false, message: 'Conductor no encontrado' });
            }
            const isMatch = bcrypt.compareSync(password, conductor.password);
            if (!isMatch) {
                return res.status(401).json({ success: false, message: 'Contraseña incorrecta' });
            }
            
            res.status(200).json({ success: true, message: 'Inicio de sesión exitoso' });
        });
    },

      findByEmpresa(req,res){
        // voy a resibir un parametro el error o  la data

        const id_empresa = req.params.id_empresa;

        Conductor.findByEmpresa(id_empresa, (err, data)=>{
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

        create (req, res) {
           
           
            const conductor=(req.body)  // de esta manera capturo los datos que me envie el cliente
            

            const files=req.files

             console.log("files", files)

            var inserts = 0;

            if (files.length === 0) {
                return res.status(501).json({
                    success:false,    //tipo de repuesta porque es una respuesta no exitosa
                    message:'Hubo un error con el registro del conductor, no llegan las imagenes ',
            })
            }
            else {
                Conductor.create(conductor,async (err, id_conductor)=>{
    
                    if(err){
                        return res.status(501).json({
                                success:false,    //tipo de repuesta porque es una respuesta no exitosa
                                message:'Hubo un error con el la actualizaciom del conductor ',
                                error:err
                        })
                    }

                    conductor.id = id_conductor;

                    try {
                       
                        await Rol.createConductor(conductor.id, 2, (err, roleId2) => {
                            if (err) {
                                throw err;
                            }
                            // Aquí puedes manejar el resultado si es necesario
                            console.log('Rol 2 creado con éxito:', roleId2);
                        });
                     
                    } catch (err) {
                        return res.status(501).json({
                            success: false,
                            message: 'Hubo un error con el registro de los roles de usuario',
                            error: err
                        });
    }
                    const start = async () => {
                        await asyncForEach(files, async (file) => {
                            const path=`image_${Date.now()}`  //nombre con el cual se va a crear el archivoen firebase el cual no se va a repetir 
                            const url = await storage(file,path)  //le vamos a enviar la imagen del usuario que esta en la poscion cero que es la unica
                
                            if(url !=undefined && url != null){
                              

                                if (inserts == 0) {
                                    conductor.image1 = url;
                                }
                                else if (inserts == 1) {
                                    conductor.image2 = url;
                                }
                                else if (inserts == 2) {
                                    conductor.image3 = url;
                                }
                            }

                            await Conductor.update(conductor, (err, data) => {
                                if(err){
                                    return res.status(501).json({
                                            success:false,    //tipo de repuesta porque es una respuesta no exitosa
                                            message:'Hubo un error con el actualizacion del conductoro ',
                                            error:err
                                    })
                                }

                                inserts = inserts +1;

                                if (inserts == files.length) {
                                    return res.status(201).json({
                                        success:true,    //tipo de repuesta porque es una respuesta exitosa
                                        message:'El registro del conductor se actualizo correctamente',
                                        data: data //no voy a retornar el id sino que retornare el user completo 
                                    })
                                }
                            });
                        })
                    }

                    start()
    
                 
    
                 })
            }
        },


        update(req, res) {
            const conductor = req.body;

            Conductor.update(conductor, (err, data) => {
                
                
                if(err){
                    return res.status(501).json({
                            success:false,    //tipo de repuesta porque es una respuesta no exitosa
                            message:'Hubo un error con el registro del conductoro ',
                            error:err
                    })
                }

                return res.status(201).json({
                    success:true,    //tipo de repuesta porque es una respuesta exitosa
                    message:'El registro del conductor se actualizo correctamente',
                    data: data //no voy a retornar el id sino que retornare el user completo 
                })
            })
        },

        updateWithImage(req, res) {
            const conductor=JSON.parse(req.body.conductor)  // de esta manera capturo los datos que me envie el cliente

            const files=req.files

            var inserts = 0;

            if (files.length === 0) {
                return res.status(501).json({
                    success:false,    //tipo de repuesta porque es una respuesta no exitosa
                    message:'Hubo un error con el registro del conductor ',
            })
            }
            else {
                Conductor.update(conductor,(err, id_conductor)=>{
    
                    if(err){
                        return res.status(501).json({
                                success:false,    //tipo de repuesta porque es una respuesta no exitosa
                                message:'Hubo un error con el registro del conductoro ',
                                error:err
                        })
                    }

                    conductor.id = id_conductor;

                    const start = async () => {
                        await asyncForEach(files, async (file) => {
                            const path=`image_${Date.now()}`  //nombre con el cual se va a crear el archivoen firebase el cual no se va a repetir 
                            const url = await storage(file,path)  //le vamos a enviar la imagen del usuario que esta en la poscion cero que es la unica
                
                            if(url !=undefined && url != null){
                              

                                if (inserts == 0) {
                                    conductor.image1 = url;
                                }
                                else if (inserts == 1) {
                                    conductor.image2 = url;
                                }
                                else if (inserts == 2) {
                                    conductor.image3 = url;
                                }
                            }

                            await Conductor.update(conductor, (err, data) => {
                                if(err){
                                    return res.status(501).json({
                                            success:false,    //tipo de repuesta porque es una respuesta no exitosa
                                            message:'Hubo un error con el registro del conductoro ',
                                            error:err
                                    })
                                }

                                inserts = inserts +1;

                                if (inserts == files.length) {
                                    return res.status(201).json({
                                        success:true,    //tipo de repuesta porque es una respuesta exitosa
                                        message:'El registro del conductor se realizo correctamente',
                                        data: data //no voy a retornar el id sino que retornare el user completo 
                                    })
                                }
                            });
                        })
                    }

                    start()
    
                 
    
                 })
            }
        },
        
        



        delete(req,res){
            // voy a resibir un parametro el error o  la data
    
            const id = req.params.id;
    
            Conductor.delete(id, (err, id)=>{
                if (err) {
                    return res.status(501).json({
                        success: false, //tipo de repuesta porque es una respuesta no exitosa
                        message: 'Hubo un error al eliminar eñ Perfil de Empresa  ',
                        error: err
                    })
                }
    
               return res.status(201).json({
                success: true,
                message: 'El conductoro se elimino',
                data: `${id}`
               });  //rtetorno la lista de pérfil de empresas
    
            });
        },


        async  getAll(req,res){
            // voy a resibir un parametro el error o  la data
    
            Conductor.getAll((err,data)=>{
                if (err) {
                    return res.status(501).json({
                        success: false, //tipo de repuesta porque es una respuesta no exitosa
                        message: 'Hubo un error al listar el perfil de Conductor  ',
                        error: err
                    })
                }

            
    
               return res.status(201).json(data);  //rtetorno la lista de pérfil de empresas
    
            })

        },

        async  getAllConductoresUsuarios(req,res){
            // voy a resibir un parametro el error o  la data
    
            User.findConductorMen((err,data)=>{
                if (err) {
                    return res.status(501).json({
                        success: false, //tipo de repuesta porque es una respuesta no exitosa
                        message: 'Hubo un error al listar el perfil de Conductor  ',
                        error: err
                    })
                }

            
    
               return res.status(201).json(data);  //rtetorno la lista de pérfil de empresas
    
            })

        }


}