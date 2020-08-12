const express = require('express');
const router = express.Router();
const coustomerController = require('../controllers/coustomercontrollers');

router.get('/user', coustomerController.list);
router.post('/add', coustomerController.save);
router.get('/delete/:id', coustomerController.delete);

router.get('/update/:id', coustomerController.edit);
router.post('/update/:id', coustomerController.update);


router.get('/produc', coustomerController.listproduct);





module.exports = router;