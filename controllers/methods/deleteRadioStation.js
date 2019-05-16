const db = require('../../models/radioList_DB.js');



module.exports = async (req, res, next) => {
    let result = await db.deleteRadioStation(req.body.id);
    if(result.id){
        if(req.body.id == result.id){
            res.status(200).json(`${result.name} - station was deleted on radio list :)`);
        }else{
            res.status(404).json(`${result.name} - station was failed deleted on radio list :(`);
        }
    }else{
        res.status(404).json(`${result.name} - station was failed deleted on radio list :(`);
    }
}