console.clear();

import 'reflect-metadata';
import 'dotenv/config';
import express, { Request, Response, NextFunction } from 'express';
import { errors } from 'celebrate';
import 'express-async-errors';//Approuch de Fazer Middlewares de errors > precisa desse pacote
import cors from 'cors';

import routes from './routes';
import AppError from '@shared/errors/AppError';
import uploadConfig from '@shared/config/upload';

import '@shared/infra/typeorm';
import '@shared/container';

const app = express();

//Restrição acesso Server
app.use(cors());


app.use(express.json());
//rota para arquivos
//http://localhost:3333/files/ae070f9f4addc7a5c231-CV%20Gabriel%20Rodrigues%20%20-%2027-05-2020.pdf
app.use('/files', express.static(uploadConfig.uploadsFolder));
app.use(routes);
app.use(errors());//ultimo


app.use((err: Error, request: Request, response: Response, next: NextFunction) => {

    if (err instanceof AppError) {
        return response.status(err.statusCode).json({
            status: 'error',
            message: err.message,
        })
    }

    console.error(err);

    return response.status(500).json({
        status: 'error',
        message: 'Internal server error',
    })
});



app.listen(3334, () => {
    console.log('🚀 Server started on port 3333');
});

