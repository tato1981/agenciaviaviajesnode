import express from 'express';
import { paginaInicio, 
    paginaNosotros, 
    paginaViajes, 
    paginaDetalleViaje, 
    paginaTestimoniales,
    
} from '../controllers/paginasController.js'; 

import { guardarTestimonial } from '../controllers/testimonialControllers.js';


const router = express.Router();

//inicio

router.get('/', paginaInicio);

//nosotros

router.get('/nosotros', paginaNosotros)

//viajes

router.get('/viajes', paginaViajes);
router.get('/viajes/:slug', paginaDetalleViaje);


//testimoniales

router.get('/testimoniales', paginaTestimoniales )
router.post('/testimoniales', guardarTestimonial )






export default router;