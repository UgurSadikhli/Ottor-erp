import { NextApiRequest, NextApiResponse } from 'next';
import { RegisterUserDto } from '@/dtos/RegisterUserDto';
import db from '../../../db.json';
import { User } from '@/models/User';
import { v4 as uuidv4 } from 'uuid';

const registerUser = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        if(req.method != "POST")
        {
            return res.status(404).end();   
        }

        const registerUserRequest: RegisterUserDto = req.body;
        const users = db.users;

        if (!registerUserRequest.name || !registerUserRequest.surname || !registerUserRequest.email || !registerUserRequest.password || !registerUserRequest.dateofbirth) {
            return res.status(400).json({ error: 'Missing registration data' });
        }

        if (users.find((x) => x.email == registerUserRequest.email)) {
            return res.status(400).json({ error: 'User with this email already exists' });
        }

        const newUser: User = {
            id: uuidv4(),
            name: registerUserRequest.name,
            surname: registerUserRequest.surname,
            email: registerUserRequest.email,
            password: registerUserRequest.password
        };

        db.users.push(newUser);

        res.status(200).json({ success: true });
    } catch (error) {
        res.status(500).json({ error: 'An error occurred' });
    }
};


export default registerUser;