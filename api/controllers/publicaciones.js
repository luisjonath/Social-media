const {response} = require("express")
const Publicacion = require("../models/Publicacion")

const CrearPublicacion = async(req, res=response) => {
    const publicacion  = new Publicacion(req.body)

    try {
        publicacion.user = req.uid

        const publicacionGuardada = await publicacion.save()
        res.json({
            ok:true,
            publicacion: publicacionGuardada
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok:false,
            msg: "Ha ocurrido un error"
        })
    }
}

const getPublicaciones = async(req, res=response) => {
    const publicaciones =await Publicacion.find()
    .populate("user", "name")

    res.json({
        ok: true,
        publicaciones
    })
}

const editarPublicaciones = async(req, res=response) => {
    const publicacionId = req.params.id
    const uid = req.uid

    try {

        const publicacion = await Publicacion.findById(publicacionId)

        if(!publicacion) {
            return res.status(404).json({
                ok: false,
                msg:"La publicacion no existe"
            })
        }

        if(publicacion.user.toString() !== uid) {
            return res.status(401).json({
                ok: false,
                msg: "No tiene privilegio de editar esta publicacion"
            })
        }
        const nuevaPublicacion = {
            ...req.body,
            user: uid
        }

        const PublicacionActualizada = await Publicacion.findByIdAndUpdate(publicacionId, nuevaPublicacion, {new: true})

        res.json({
            ok: true,
            publicacion: PublicacionActualizada
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: "Ha ocurrido un error"
        })
    }
}


module.exports = {
    CrearPublicacion,
    getPublicaciones,
    editarPublicaciones

}