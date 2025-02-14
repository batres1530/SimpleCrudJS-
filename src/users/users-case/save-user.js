import {User} from '../models/user.js'


export const saveUser = async (userLike) => {

    const user = new User(userLike);
    // aqui se puede validar el usuario
    if (user.id) {
        throw 'No implemetada la actulizacion';
        return;
    }

    const updateUser = await createUser(user);
    return updateUser;
}


const createUser = async (user) => {
    const URL = `${import.meta.env.VITE_BASE_URL}/users`;
    const res = await fetch(URL, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    const newUser = await res.json();
    console.log(  {newUser});
    return newUser;

}