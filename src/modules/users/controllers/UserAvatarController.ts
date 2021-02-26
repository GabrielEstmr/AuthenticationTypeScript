import { container } from 'tsyringe';
import { Request, Response } from 'express';

import UpdateUserAvatarService from '@modules/users/services/UpdateUserAvatarService';

//User avatar no singular = pois é um único avatar por usuário
export default class UserAvatarController {
    public async update(request: Request, response: Response): Promise<Response> {
        // const usersRepository = new UsersRepository();
        const updateUserAvatarService = container.resolve(UpdateUserAvatarService);

        const { email } = request.body;

        //Aqui: vendo se tem arquivo e se nao tiver já atualiza
        const user = await updateUserAvatarService.execute({
            email,
        })
        return response.json(user);
    }
}