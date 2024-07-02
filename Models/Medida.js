class Medida {
    medidas = [];
  
    create = async (id, temperatura) => {
      const medida = { id, temperatura, fechaHora: new Date() };
      this.medidas.push(medida);
      return medida;
    };

    getAll = async () => {
      return this.medidas;
    };

    getById = async (id) => {
      return this.medidas.filter(medida => medida.id === id);
    };
}

export default Medida;
