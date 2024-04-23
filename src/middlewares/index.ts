import express from 'express';
import {get, merge} from 'lodash'
import { getUsers } from '../db/users';

export const getAllUsers(req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        const users = await getUsers()
        return  res.sendStatus(200).json(users);

    } catch (error) {
        console.log(error);
        res.sendStatus(400);
    }
}