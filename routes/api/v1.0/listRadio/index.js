const express = require('express');
const router = express.Router();
const controllers = require('../../../../controllers/index');

router.get('/listRadio',controllers.getAllListRadio);
router.post('/listRadio',controllers.addNewRadioStation);
router.post('/listRadio/image',controllers.saveImageById);
router.put('/listRadio/:id',controllers.editRadioStationById);
router.delete('/listRadio/:id',controllers.deleteRadioStation);

router.get('/listRadio/favourite',controllers.getFavListRadio);
router.put('/listRadio/favourite/:id',controllers.addToFavourite);
router.patch('/listRadio/favourite/:id',controllers.deleteToFavourite);



module.exports = router;


