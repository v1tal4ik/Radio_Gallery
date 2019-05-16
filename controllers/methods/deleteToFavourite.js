const db = require('../../models/radioList_DB.js');



module.exports = async (req, res, next) => {
    let result = await db.deleteToFavouriteById(req.body.id);
    if(req.body.id == result.id){
        res.status(200).json(`${result.name} - station was deleted on favourite list :)`);
    }else{
        res.status(404).json(`${result.name} - station was failed deleted on favourite list :(`);
    }
}