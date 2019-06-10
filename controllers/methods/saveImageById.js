const db = require('../../models/radioList_DB.js');
const formidable = require('formidable');
const path = require('path');
const fs = require('fs');


module.exports = async (req, res, next) => {
    const form = new formidable.IncomingForm();

     form.uploadDir = path.join(process.cwd(), './build/img/stationIcon');

    form.parse(req, (err, fields, files) => {
        if(err){
            res.send({path: './img/fail.jpg'});
        }else{
            let old_path = files['image'].path;
            let new_path = path.join('./build/img/stationIcon', files['image'].name);
            fs.renameSync(old_path, new_path);
            let res_path = new_path.substring(6);
            res.send({path: res_path});
        }
    });
}