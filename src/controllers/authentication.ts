import express from 'express';
import { getUserByEmail, createUser } from '../db/users';
import { random, authentication } from '../helpers/index';


export const register = async(req: express.Request, res: express.Response) => {
    try {
        const{ email, password, username } = req.body;

        if(!email || !password !! !username){
            return res.sendStatus(400);
        }

        const existingUser = await getUserByEmail(email);
        if(existingUser) {
            return res.sendStatus(400);
        }

        const salt= random();
        const hashedPassword =  authentication(salt, password);
        const user = await createUser({
            email,
            username,
            authentication: {
                salt,
                password: hashedPassword,
            }
        });
        return res.status(200).json(user).end();

    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
        )
    }
}