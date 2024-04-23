import express from 'express';
import { getUsers, getUserBySessionToken, deleteUserById } from '../db/users';

export const getAllUsers = async (req: express.Request, res: express.Response) => {
    try {
        const users = await getUsers();

        return res.status(200).json(users);

    } catch (error) {
        console.log(error);
        res.sendStatus(400);
    }
};

export const deleteUser = async (req: express.Request, res: express.Response) => {
    try {
        const {id} = req.params;
        const deleteUser = deleteUserById(id);

        return res.status(200).json(deleteUser);


    } catch (error) {
        console.log(error),  'errore nella delete';
        res.sendStatus(400);
    }
};