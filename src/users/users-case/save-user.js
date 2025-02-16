import {User} from '../models/user.js'
import {userModelToLocalhost} from '../mappers/user-to-localhst-mapper.js'


export const saveUser = async (userLike) => {
   
    const user = new User(userLike);

    if (!user.firstName  || !user.lastName || !user.balance || !user.isActive) {
        throw 'No se puede crear el usuario';
    }
    const userTosave = userModelToLocalhost(user);


    if (user.id) {
        throw 'No implemetada la actulizacion';
        return;
    }

    const updateUser = await createUser(userTosave);
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
