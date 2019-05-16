const db = require('../../models/radioList_DB.js');



module.exports = async (req, res, next) => {
    let result = await db.addNewRadioStation(req.body.obj);
    if(req.body.obj.id == result.id){
        res.status(201).json(`${result.name} - station was added on radio list :)`);
    }else{
        res.status(418).json(`${result.name} - station was failed to added on radio list :(`);
    }
}