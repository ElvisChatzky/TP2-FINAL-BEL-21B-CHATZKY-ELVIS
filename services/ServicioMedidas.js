import Medida from '../Models/Medida.js';

class ServicioMedidas {
    medidaModel = new Medida();

    agregarMedidaServicio = async (id, temperatura) => {
        const idValidate = /^[1-5]$/.test(id);
        const tempValidate = /^(-20|-[0-1]?[0-9]|[0-9]?[0-9]|100)$/.test(temperatura);

        if (!idValidate || !tempValidate) {
            const error = new Error('Datos no válidos');
            error.statusCode = 400;
            throw error;
        }

        const data = await this.medidaModel.create(id, temperatura);
        return data;
    };

    obtenerTodasLasMedidasServicio = async () => {
        try {
            const data = await this.medidaModel.getAll();
            return data;
        } catch (error) {
            throw error;
        }
    };

    obtenerMedidasPorIdServicio = async (id) => {
        try {
            const data = await this.medidaModel.getById(id);
            return data;
        } catch (error) {
            throw error;
        }
    };

    obtenerEstadisticasServicio = async () => {
        const medidas = await this.medidaModel.getAll();
        const estadisticas = {
          cantidadTotalMuestras: medidas.length,
          temperaturaSondas: {},
        };
      
        medidas.forEach(({ id, temperatura }) => {
          if (!estadisticas.temperaturaSondas[id]) {
            estadisticas.temperaturaSondas[id] = {
              cantidad: 0,
              totalTemperatura: 0,
            };
          }
      
          const sondaStats = estadisticas.temperaturaSondas[id];
          sondaStats.cantidad += 1;
          sondaStats.totalTemperatura += Number(temperatura);
        });
      
        for (const id in estadisticas.temperaturaSondas) {
          const sondaStats = estadisticas.temperaturaSondas[id];
          sondaStats.promedio = sondaStats.totalTemperatura / sondaStats.cantidad;
          delete sondaStats.totalTemperatura;
        }
      
        return { estadisticas };
      };
}

export default ServicioMedidas;
