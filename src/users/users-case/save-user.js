import {User} from '../models/user.js'
import {userModelToLocalhost} from '../mappers/user-to-localhst-mapper.js'
import {localhostUserToModel} from '../mappers/localhost-user.mapper.js'


export const saveUser = async (userLike) => {
    const user = new User(userLike);

    if (!user.firstName || !user.lastName || !user.balance) {
        throw new Error('Required fields missing');
    }

    const userToSave = userModelToLocalhost(user);
    let userUpdate;

    if (!userToSave.id) {
        userUpdate = await createUser(userToSave);
    } else {
        userUpdate = await updateUser(userToSave);
    }

    return localhostUserToModel(userUpdate);
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

const updateUser = async (user) => {
    const URL = `${import.meta.env.VITE_BASE_URL}/users/${user.id}`;
    const res = await fetch(URL, {
        method: 'PATCH',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    const updateUser = await res.json();
    console.log(  {updateUser});
    return updateUser;

}

const onUserChanged = (updatedUser) => {
    let wasFound = false;
    
    state.users = state.users.map(user => {
        if (user.id === updatedUser.id) {
            wasFound = true;
            return updatedUser;
        }
        return user;
    });

    if (!wasFound) {
        state.users.push(updatedUser);
    }
}

