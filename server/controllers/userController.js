import bcrypt from  "bcryptjs";
import jwt from "jsonwebtoken";
import UserModal from "../models/user.js";

const secret = "test";

export const signin = async (req, res, next) =>{
    const {email, password} = req.body;

    try {
        
        const oldUser = await UserModal.findOne({email});

        if(!oldUser) return res.status(404).json({message:"user does not exist"});

        const isValidPassword = await bcrypt.compare(password, oldUser.password);

        if(!isValidPassword) return res.status(404).json({message: "Invalid credentials!"});

        const token = jwt.sign({email: oldUser.email, id: oldUser.id}, secret, {expiresIn: "1h"});

        res.status(200).json({result: oldUser, token});

    } catch (error) {
        
        res.status(500).json({message: "Something went wrong!"});

        console.log(error);

    }
}

export const signup = async (req, res)=>{
    const {email, password, firstName, lastName} = req.body;

    try {
        const oldUser = await UserModal.findOne({email: email});

        if(oldUser){
            return res.status(400).json({message: "User Already exist"});
        }

        const hashedPassword = await bcrypt.hash(password, 12);

        const result = await UserModal.create({
            email, 
            password: hashedPassword,
            name: `${firstName} ${lastName}`
        });

        const token = jwt.sign({email: result.email, id: result._id}, secret, {expiresIn: "1h"});

        res.status(201).json({result, token});
        
    } catch (error) {

        res.status(500).json({message: "Something went wrong!"});

        console.log(error);
    }
};