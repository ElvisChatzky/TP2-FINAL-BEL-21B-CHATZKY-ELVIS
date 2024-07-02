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
}

export default ServicioMedidas;
