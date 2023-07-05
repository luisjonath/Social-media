const { Schema, model } = require("mongoose");

const PublicacionSchema = Schema({
  descripcion: {
    type: String,
    required: true,
  },
  img: {
    type: String,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "Usuario",
    required: true
}
  
});

module.exports = model("Publicacion", PublicacionSchema);
