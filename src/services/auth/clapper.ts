
import { CLAPPER_API_BASE_URL } from "../../config"
import Session from "../../models/Session"
import { AuthService } from "./service"

function securePassword(password: string): string {
    return password;
}

interface HTTPError {
    error: {
        name: string;
        message: string;
        statusCode: number
    }
}

export const authService: AuthService = {
    async login(username: string, password: string): Promise<Session> {
        const url = `${CLAPPER_API_BASE_URL}/users/login-user`;
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                email: username,
                password: securePassword(password)
            })
        });
        if (!response.ok) {
            const body: HTTPError = await response.json();
            throw new Error(body.error.message);
        }
        return {
            token: 'token',
            profile: {
                id: '0',
                email: 'jtorres990@gmail.com',
                firstName: 'julio',
                lastName: 'torres'
            }
        }
    },
    async logout() {

    }
}
