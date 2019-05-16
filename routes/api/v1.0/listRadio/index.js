const express = require('express');
const router = express.Router();
const controllers = require('../../../../controllers/index');

router.get('/listRadio',controllers.getAllListRadio);
router.get('/listRadio/favourite',controllers.getFavListRadio);
router.put('/listRadio/favourite/:id',controllers.addToFavourite);
router.patch('/listRadio/favourite/:id',controllers.deleteToFavourite);
router.post('/listRadio',controllers.addNewRadioStation);
router.delete('/listRadio/:id',controllers.deleteRadioStation);


module.exports = router;


