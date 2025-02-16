import { localhostUserToModel } from "../mappers/localhost-user.mapper";
import { User } from "../models/user";
// cargar usuarios
export const loadUsers = async (page = 1) => {
    const url = `${import.meta.env.VITE_BASE_URL}/users?_page=${page}`;
    const res = await fetch(url);
    const users = await res.json();
    return users.map(localhostUserToModel);}