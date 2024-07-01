import Palabra from "../Models/Palabra.js";

class Service {
  palabraModel = new Palabra();

  ingresarPalabraService = async (palabra) => {
    try {
      // validacion:
      const palabraValidate = /^[a-zA-Z]+$/.test(palabra);
      if (!palabraValidate) throw error;
      const data = await this.palabraModel.create(palabra);
      return data;
    } catch (error) {
      throw error;
    }
  };

  listarPalabraService = async () => {
    try {
      const data = await this.palabraModel.getAll();
      return data;
    } catch (error) {
      throw error;
    }
  };

  borrarPalabraService = async (palabra) => {
    try {
      // validacion:
      const palabraValidate = /^[a-zA-Z]+$/.test(palabra);
      if (!palabraValidate) throw error;
      const data = await this.palabraModel.borrar(palabra);
      if (!data) throw error;
      return data;
    } catch (error) {
      throw error;
    }
  };

  listarApiPalabraService = async (cantidad) => {
    try {
        // validacion para numeros:
      const cantidadValidate = /^[0-9]+$/.test(cantidad);
      if (!cantidadValidate) throw error;
      // dentro del fetch se pea la URL que te pasan
      const apiData= await fetch(`https://texto.deno.dev/palabras?cantidad=${cantidad}`)
      // y si uso el fetch estoy OBLIGADO a hacer el .json()
      const {palabras}= await apiData.json()
      const data = await this.palabraModel.bulkCreate(palabras);
     // if (!data) throw error;
      return data;
    } catch (error) {
      throw error;
    }
  };
}


export default Service;
