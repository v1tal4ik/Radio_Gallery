const db = require('../../models/radioList_DB.js');



module.exports = async (req, res, next) => {
  let result = await db.getAllListRadio();
  if(result.length){
   res.status(200).json(result);
   }else{
      res.status(404).json([]);
   }
}