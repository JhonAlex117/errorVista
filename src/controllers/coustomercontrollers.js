const controller = {};

controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM usuario', (err, usuarios) => {
            if(err){
                res.json(err);
            }
            
            res.render('usuarios', {
                data: usuarios
            });
        });
    });

}
controller.listproduct = (req, res) => {
    // cambiosList('SELECT * FROM producto', '/list_productos');
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM producto', (err, producto) => {
            if(err){
                res.json(err);
            }
            
            res.render('/producto', {
                data: producto 
            });
        });
    });
}
controller.save = (req,res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO usuario set ?', [data], (err, usuarios) =>{
            res.redirect('/user');
        })
    })
}
controller.update = (req,res) => {
    const { id }= req.params;
    const newUsuario = req.body;
    req.getConnection((err, conn) =>{
        conn.query('UPDATE usuario set ? where cc_usuario=?', [newUsuario, id], (err, usuarios) =>{
            res.redirect('/user');
        })
    })
}
controller.edit =(req, res) => {
    const { id }= req.params;
    req.getConnection((err, conn) =>{
        conn.query('SELECT * FROM usuario where cc_usuario=?', [id], (err, usuarios) =>{
            res.render('coustomer_edit', {
                data: usuarios[0]
            });
        })
    })
}
controller.delete = (req,res) => {
    const { id }= req.params;
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM usuario WHERE cc_usuario=?', [id], (err, usuarios) =>{
            res.redirect('/user');
        })
    })
}





module.exports = controller;