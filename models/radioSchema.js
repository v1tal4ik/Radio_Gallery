const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const radioSchema = new Schema({
    id: {
        type: Number,
        required: [true, 'Id is undefined'],
        unique:true
    },
    name: {
        type: String,
        required: [true, 'Name is undefined']
    },
    image: {
        type: String
    },
    genres: {
        type: String,
    },
    stream: {
        type: String,
        required: [true, 'Stream is undefined']
    },
    favourite: {
        type: Boolean,
        required: [true, 'Favourite is undefined']
    },
}, {
    versionKey: false
});

const listRadio = mongoose.model('listRadio', radioSchema);

module.exports = listRadio;