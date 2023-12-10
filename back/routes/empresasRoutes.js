
// traigo el controlador de categorias de empresas
const empresasController=require('../controllers/empresasController')

// voy a traer passport para asegurara las rutas , el cliente de manra obligaria, nos tiene que enviar el token de session

const passport =require('passport')


// voy a exportar un metodo el cual va a recibir un objeto app y un objeto upload  que me vaa permitir subir las imagenes

// metodo para crear categorias 

module.exports=(app,upload)=>{
    app.get('/api/empresas/getAll',empresasController.getAll )
    app.get('/api/empresas/findByUser/:id_user',empresasController.findByUser )
    app.post('/api/empresas/create',upload.array('image',1),empresasController.create )
    app.put('/api/empresas/updateWithImage',upload.array('image',1),empresasController.updateWithImage )
    app.put('/api/empresas/update',empresasController.update)
    app.delete('/api/empresas/delete/:id',empresasController.delete )
    // app.post('/api/empresas/create',passport.authenticate('jwt',{session:false}),upload.array('image',1),categoriesController.create )
}
