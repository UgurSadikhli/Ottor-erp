import jwt from 'jsonwebtoken';
import {RequestCookie} from "next/dist/compiled/@edge-runtime/cookies";

const SECRET_KEY = '13KSKOA41OAQWJ11ID';

export function verifyToken(token: RequestCookie): boolean {
    try {
        jwt.verify(token, SECRET_KEY);
        return true;
    } catch (error) {
        return false;
    }
}
