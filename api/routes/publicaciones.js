const { Router } = require("express");
const { validarJWT } = require("../middlewares/validarJwt");
const {
    CrearPublicacion
} = require("../controllers/publicaciones");
const router = Router();
const { check } = require("express-validator");
const { validarRutas } = require("../middlewares/validations");

router.use(validarJWT);

/* router.get("/", ); */
router.post(
  "/",
  CrearPublicacion
);
/* router.put("/:id",[
  
], actualizarEvento);
router.delete("/:id", eliminarEvento); */

module.exports = router;