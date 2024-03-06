
import {  Request, Response ,NextFunction } from 'express';
import { VendorLoginInput } from '../dto';
import { FindVendor, Getvendors } from './AdminController';
import { GenerateSignature, ValidatePassword } from '../utility';

export const VendorLogin = async (req: Request,res: Response, next: NextFunction) => {

    const { email, password } = <VendorLoginInput>req.body;

    const existingUser = await FindVendor('', email);


    if(existingUser !== null){

        const validation = await ValidatePassword(password, existingUser.password, existingUser.salt);
        if(validation){

            const signature = await GenerateSignature({
                _id: existingUser._id,
                email: existingUser.email,
                name: existingUser.name
            })
            return res.json(signature);
        }
    }

    return res.json({'message': 'Login credential is not valid'})

}

export const Getvendorprofile = async (req: Request,res: Response, next: NextFunction) => {
    const user = req.user;
     
    if(user){

       const existingVendor = await FindVendor(user._id);
       return res.json(existingVendor);
    }

    return res.json({'message': 'vendor Information Not Found'})
}
