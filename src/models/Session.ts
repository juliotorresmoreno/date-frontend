import Profile from "./Profile";

export default interface Session {
    profile?: Profile;
    token: string;
}
