const mongoose = require('mongoose');
var url = "mongodb+srv://lehuukien2002:i6DMZ0UVGFziuxb4@cluster0.jztuunn.mongodb.net/Zing?retryWrites=true&w=majority";

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("connect MongoDB");
    })
    .catch((err) => {
        throw err;
    });

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const songSchema = new Schema({

    img: { type: String },
    date: { type: String },
    name: { type: String },
    author: { type: String },
    url: { type: String },

}, { collection: 'listSong' });

module.exports = mongoose.model('listSong', songSchema);