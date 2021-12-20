const mongoose = require("mongoose");
const SchemaTypes = mongoose.Schema.Types;

const booksSchema = new mongoose.Schema({
    titulo: { type: String, default: null},
    sub_titulo: { type: String, default: null},
    autor: [],
    editor: { type: String, default: null},
    image: { type: String },
    categoria: { type: String, default: null},
    descripcion: { type: String, default: null},
    fecha_publicacion: [Date],
    imdb: SchemaTypes.Decimal128
});

module.exports = mongoose.model("books", booksSchema);