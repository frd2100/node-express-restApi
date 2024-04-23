import express from 'express';
import {get, merge} from 'lodash'
import { getUserBySessionToken } from '../db/users';

export const isAuthentichatedasync(req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        const sessionToken = req.cookies['FEDERICO-AUTH'];

        if(!sessionToken){
            return res.sendStatus(403);
        }

        const existingUser =  await getUserBySessionToken(sessionToken);

        if(!existingUser){
            return res.sendStatus(403);
        }

        merge(req, {identity: existingUser});
        
    } catch (error) {
        console.log(error);
        );
        
    }
}