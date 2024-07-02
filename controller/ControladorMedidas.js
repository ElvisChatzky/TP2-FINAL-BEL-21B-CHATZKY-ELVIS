import ServicioMedidas from '../services/ServicioMedidas.js';

class ControladorMedidas {
    servicio = new ServicioMedidas();

    agregarMedida = async (req, res) => {
        try {
            const { id, temperatura } = req.body;
            const data = await this.servicio.agregarMedidaServicio(id, temperatura);
            res.status(200).json({ Msg: data });
        } catch (error) {
            const statusCode = error.statusCode || 500;
            res.status(statusCode).json({ errorMsg: error.message });
        }
    };

    obtenerTodasLasMedidas = async (req, res) => {
        try {
            const data = await this.servicio.obtenerTodasLasMedidasServicio();
            res.status(200).json({ Msg: data });
        } catch (error) {
            res.status(500).json({ errorMsg: error.message });
        }
    };

    obtenerMedidasPorId = async (req, res) => {
        try {
            const { id } = req.params;
            const data = await this.servicio.obtenerMedidasPorIdServicio(id);
            if (data.length === 0) {
                res.status(404).json({ errorMsg: 'Número de sonda incorrecto' });
            } else {
                res.status(200).json({ Msg: data });
            }
        } catch (error) {
            res.status(500).json({ errorMsg: error.message });
        }
    };

    obtenerEstadisticas = async (req, res) => {
        try {
            const estadisticas = await this.servicio.obtenerEstadisticasServicio();
            res.status(200).json({ estadisticas });
        } catch (error) {
            res.status(500).json({ errorMsg: error.message });
        }
    };
}

export default ControladorMedidas;
