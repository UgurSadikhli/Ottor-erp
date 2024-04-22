import { cookies } from 'next/headers'
export function setCookie(name: string,value:string): boolean {
    try {
        cookies().set(name,value);
        return true;
    } catch (error) {
        return false;
    }
}
