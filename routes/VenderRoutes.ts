import express,{Request,Response,NextFunction} from 'express';
import { Getvendorprofile, VendorLogin } from '../controllers/VendorController';
import { Authenticate } from '../middleware';
const Router= express.Router();



Router.post('/login', VendorLogin);
Router.get('/profile', Authenticate,Getvendorprofile);

export {Router as VenderRoutes}