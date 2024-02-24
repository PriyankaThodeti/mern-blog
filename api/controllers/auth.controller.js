 import User from '../modules/user.model.js';
 import bcryptjs from 'bcryptjs';
import { errorHandler } from '../utils/error.js';

export const signup = async (req, res, next)=>{
    
    const {username, email, password } = req.body;
      
    if(!username || !email || !password || username == '' || email == ''|| password == ''){  
        next(errorHandler(400, "All Fileds are Required"));
    }

    const hassedPassword = bcryptjs.hashSync(password, 10);

    const newUser = new User ({
        username, 
        email, 
        password: hassedPassword
    });

    try {
        await newUser.save();
        res.json('signup successfull');
    } catch (error) {
        next(error);
    }
    
}