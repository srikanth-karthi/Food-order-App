import express, { Request, Response, NextFunction } from "express";
import { CreateVender,Getvendors,GetvendorsBYid } from "../controllers";
const Router = express.Router();


Router.post('/vendor',CreateVender );
Router.get('/vendors',Getvendors );
Router.get('/vendor/:id',GetvendorsBYid );
  
Router.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.json({ message: "Hello" });
});

export { Router as AdminRoutes };
