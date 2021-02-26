import path from 'path';
// import fs from 'fs';//fileSystems
import { injectable, inject } from 'tsyringe';

import IUsersRepository from '../repositories/IUsersRepository';
import IStorageCSVDataProvider from '@shared/container/providers/CSVProvider/models/IStorageCSVDataProvider';
// import uploadConfig from '@config/upload'
import User from '@modules/users/infra/typeorm/entities/User';

import AppError from '@shared/errors/AppError';

interface IRequest {
    email: string;
}

interface IDataCSV {
    name: string;
    cpf: string;
    rg: string;
    id: string;
    email: string;
    IP: string;
    birth_date: Date;
}


@injectable()
class UpdateUserAvatarService {

    constructor(
        @inject('UsersRepository')
        private usersRepository: IUsersRepository,

        @inject('DiskStorageProvider')
        private storageCSVDataProvider: IStorageCSVDataProvider,
    ) { }

    public async execute({ email }: IRequest): Promise<User | void> {
        const user = await this.usersRepository.findByEmail(email);

        if (!user) {
            throw new AppError('Only authenticated users can change avatar.', 401);
        }





        const dataToCSV: IDataCSV = {
            name: user.name,
            IP: '3333',
            birth_date: user.birth_date,
            cpf: user.cpf,
            email: user.email,
            id: user.id,
            rg: user.rg
        }

        console.log('dataToCSV', dataToCSV)

        await this.storageCSVDataProvider.saveFile(dataToCSV);

        // delete user.password;
        return user;
    }
}


export default UpdateUserAvatarService;