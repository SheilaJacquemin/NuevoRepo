
// traigo el controlador de categorias de empresas
const conductorController=require('../controllers/conductoresControllers')

// voy a traer passport para asegurara las rutas , el cliente de manra obligaria, nos tiene que enviar el token de session

const passport =require('passport')


// voy a exportar un metodo el cual va a recibir un objeto app y un objeto upload  que me vaa permitir subir las imagenes

// metodo para crear categorias 

module.exports=(app,upload)=>{
    app.get('/api/conductor/findByEmpresa/:id_empresa',conductorController.findByEmpresa );
    app.post('/api/conductor/create', upload.array('image', 3), conductorController.create );
    app.put('/api/conductor/updateWithImage',upload.array('image',3),conductorController.updateWithImage )
    app.put('/api/conductor/update',conductorController.update)
    app.delete('/api/conductor/delete/:id',conductorController.delete ),
    app.get('/api/conductor/getAll',conductorController.getAll )
    app.get('/api/conductor/getAllUsuariosConductores',conductorController.getAllConductoresUsuarios )
    // app.post('/api/empresas/create',passport.authenticate('jwt',{session:false}),upload.array('image',1),categoriesController.create )
}
