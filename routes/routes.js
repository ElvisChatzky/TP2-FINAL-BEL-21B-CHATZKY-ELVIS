import { Router } from "express";
import Controller from "../controller/Controller.js";

const routes = Router();
const controller = new Controller();

routes.post("/", controller.ingresarPalabraService);
routes.get("/");
routes.get("/all");
routes.get("/:cantidad");
routes.delete("/");



export default routes;