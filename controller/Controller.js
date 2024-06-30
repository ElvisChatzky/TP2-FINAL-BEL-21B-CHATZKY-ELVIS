import Service from '../services/Service.js';

class Controller {
    service = new Service();    
    ingresarPalabraService = async (req, res) => {  
        try {
            const { palabra } = req.body;
            const data = await this.service.ingresarPalabraService(palabra);
            res.status(200).send({Msg: data});



        } catch (error) {
            res.status(422).send({ errorMsg: "no valida" });
        }
    };
}

export default Controller;