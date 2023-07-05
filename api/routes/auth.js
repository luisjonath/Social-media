const { Router } = require("express");
const router = Router();
const { check } = require("express-validator"); 

const {crearUsuario, loginUsuario, revalidarToken} = require("../controllers/auth");
const {validarRutas} = require("../middlewares/validations")
const {validarJWT} = require("../middlewares/validarJwt")

router.post(
    "/register",
    [
      check("name", "El nombre es obligatorio").not().isEmpty(),
      check("email", "El email es obligatorio").isEmail(),
      check("password", "El password debe ser de 6 caracteres").isLength({
        min: 6,
      }),
      validarRutas,
    ],
    crearUsuario
  );
  
  router.post(
    "/",
    [
      check("email", "El email es obligatorio").isEmail(),
      check("password", "El password debe ser de 6 caracteres").isLength({
        min: 6,
      }),
      validarRutas,
    ],
    loginUsuario
  );
  
  router.get("/renew", validarJWT, revalidarToken);



module.exports = router
