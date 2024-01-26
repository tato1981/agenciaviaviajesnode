import { Testimonial } from "../models/Testimonial.js";

const guardarTestimonial = async (req, res) =>{ // req lo que enviamos : res lo que express responde

    //validar

    const {nombre, correo, mensaje} = req.body;

    const errores = [];

    if (nombre.trim() == ''){
        errores.push({mensaje: 'El nombre esta vació'});
    }

    if (correo.trim() == ''){
        errores.push({mensaje: 'El correo esta vació'});
    }

    if (mensaje.trim() == ''){
        errores.push({mensaje: 'El mensaje esta vació'});
    }

    if(errores.length > 0){

        //consultar testimoniales existentes
        const testimoniales = await Testimonial.findAll();

        //mostrar la vista con errores
        res.render('testimoniales', {
            pagina: 'Testimoniales',
            errores,
            nombre,
            correo,
            mensaje,
            testimoniales,
        })
    }else{
        //almacenarlo en la base de datos

        try {
            await Testimonial.create({
                nombre,
                correo,
                mensaje
            });

            res.redirect('/testimoniales')
        } catch (error) {
            console.log(error)
        }

    }

    
}


export {
    guardarTestimonial
}