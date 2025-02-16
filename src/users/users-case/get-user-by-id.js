import { localhostUserToModel } from "../mappers/localhost-user.mapper";
import { User } from "../models/user";
// cargar usuarios
export const getUserById = async (id) => {
    const url = `${import.meta.env.VITE_BASE_URL}/users/${id}`;
    const res = await fetch(url);
    const users = await res.json();
    const userss = localhostUserToModel(users);
    return userss;
}