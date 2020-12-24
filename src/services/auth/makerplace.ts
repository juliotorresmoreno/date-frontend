
import { MAKERPLACE_API_BASE_URL } from "../../config"
import Session from "../../models/Session"
import { AuthService } from "./service"

interface HTTPError {
    message: string;
}

interface LoginResponse {
    token: string,
    profile: {
        id: string;
        email: string;
        firstName: string;
        lastName: string;
    }
}

export const authService: AuthService = {
    async login(email: string, password: string): Promise<Session> {
        const url = `${MAKERPLACE_API_BASE_URL}/users/sign-in`;
        const formData = new FormData();
        formData.append('email', email);
        formData.append('password', password);
        const response = await fetch(url, {
            method: 'POST',
            body: formData
        });
        if (!response.ok) {
            const body: HTTPError = await response.json();
            throw new Error(body.message);
        }
        const content: LoginResponse = await response.json();
        return content;
    },
    async register(firstname, lastname, phone, email, password) {
        const url = `${MAKERPLACE_API_BASE_URL}/users/sign-up`;
        const formData = new FormData();
        formData.append('firstname', firstname);
        formData.append('lastname', lastname);
        formData.append('phone', phone);
        formData.append('email', email);
        formData.append('password', password);
        const response = await fetch(url, {
            method: 'POST',
            body: formData
        });
        if (!response.ok) {
            const body: HTTPError = await response.json();
            throw new Error(body.message);
        }
    },
    async logout() {
        const url = `${MAKERPLACE_API_BASE_URL}/users/logout`;
        const response = await fetch(url, {
            method: 'DELETE'
        });
        if (!response.ok) {
            const body: HTTPError = await response.json();
            throw new Error(body.message);
        }
    }
}
