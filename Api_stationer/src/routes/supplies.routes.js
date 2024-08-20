import { Router } from "express";
import { getAll, insertSupplie, getOne, deleteOne, updateOne } from "../controllers/supplies_controller.js";
const routerSupplies = Router();
routerSupplies.get("/getAll", getAll);
routerSupplies.post("/insertSupplie", insertSupplie);
routerSupplies.get("/getOne/:barcode", getOne);
routerSupplies.delete("/deleteOne/:barcode", deleteOne);
routerSupplies.put("/updateOne/:barcode", updateOne);
export default routerSupplies;