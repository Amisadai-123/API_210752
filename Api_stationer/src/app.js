import express, { Router } from 'express';
import routerSupplies from './routes/supplies.routes.js';

const app = express();
//settings
app.set("port", 3000 || process.env.PORT);
//Middleware
app.use(express.json());
app.use("/api/stationer",routerSupplies)

export default app;