const db = require('../../models/radioList_DB.js');



module.exports = async (req, res, next) => {
    let result = await db.addToFavouriteById(req.body.id);
    if(req.body.id == result.id){
        res.status(200).json(`${result.name} - station was added on favourite list :)`);
    }else{
        res.status(404).json(`${result.name} - station was failed to added on favourite list :(`);
    }
}