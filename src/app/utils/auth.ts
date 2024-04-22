import jwt from 'jsonwebtoken';

const SECRET_KEY = '13KSKOA41OAQWJ11ID';

export function verifyToken(token: string): boolean {
    try {
        jwt.verify(token, SECRET_KEY);
        return true;
    } catch (error) {
        return false;
    }
}
