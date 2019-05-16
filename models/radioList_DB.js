const listRadio = require('./radioSchema');


module.exports.getAllListRadio = function () {
    return listRadio.find();
};

module.exports.getFavListRadio = function () {
    return listRadio.find({favourite:true});
};

module.exports.addToFavouriteById = function (id) {
    return listRadio.findOneAndUpdate({id:id},{favourite:true},{new:true});
};

module.exports.deleteToFavouriteById = function (id) {
    return listRadio.findOneAndUpdate({id:id},{favourite:false},{new:true});
};

module.exports.addNewRadioStation = function ({id,name,image,genres,stream,favourite}) {
    const radioStation = new listRadio({id,name,image,stream,genres,favourite});
    return radioStation.save();
};

module.exports.deleteRadioStation = function (id) {
    return listRadio.findOneAndDelete({id:id});
};
