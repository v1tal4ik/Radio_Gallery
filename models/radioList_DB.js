const listRadio = require('./radioSchema');

//All list
module.exports.getAllListRadio = () => listRadio.find();

module.exports.addNewRadioStation = ({id,name,image,genres,stream,favourite}) =>{
    const radioStation = new listRadio({id,name,image,stream,genres,favourite});
    return radioStation.save();
};

module.exports.editRadioStationById = ({id,name,image,genres,stream,favourite})=>{
    return listRadio.findOneAndUpdate({id:id},{id,name,image,genres,stream,favourite},{new:true});
};

module.exports.deleteRadioStation = (id)=>listRadio.findOneAndDelete({id:id});



//Favourite List
module.exports.getFavListRadio = ()=>listRadio.find({favourite:true});

module.exports.addToFavouriteById = (id)=>listRadio.findOneAndUpdate({id:id},{favourite:true},{new:true});

module.exports.deleteToFavouriteById = (id)=>listRadio.findOneAndUpdate({id:id},{favourite:false},{new:true});

