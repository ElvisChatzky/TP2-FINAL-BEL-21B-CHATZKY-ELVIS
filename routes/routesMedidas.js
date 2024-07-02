import { Router } from "express";
import ControladorMedidas from '../controller/ControladorMedidas.js';

const routesMedidas = Router();
const controlador = new ControladorMedidas();

routesMedidas.post('/sondas', controlador.agregarMedida);
routesMedidas.get('/sondas', controlador.obtenerTodasLasMedidas);
routesMedidas.get('/sondas/:id', controlador.obtenerMedidasPorId);

export default routesMedidas;