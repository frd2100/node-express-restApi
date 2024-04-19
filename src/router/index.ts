import express from 'express';
import { authentication } from '../helpers/index';

const router = express.Router();

export default (): express.Router => {
    authentication(router);
    return router;
};