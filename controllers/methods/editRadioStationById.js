const db = require('../../models/radioList_DB.js');



module.exports = async (req, res, next) => {
     let result = await db.editRadioStationById(req.body.obj);
    if(req.body.obj.id === result.id){
        res.status(200).json(`${result.name} - station was edited on Radio list :)`);
    }else{
        res.status(404).json(`${result.name} - station was failed to edited on Radio list :(`);
    }
}