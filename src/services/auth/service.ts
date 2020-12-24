
import Session from "../../models/Session";

export interface AuthService {
    login(username: string, password: string): Promise<Session>
    register(firstname: string, lastname: string, phone: string, email: string, password: string): Promise<void>
    logout(): Promise<void>
}
