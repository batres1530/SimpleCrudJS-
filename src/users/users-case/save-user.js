import {User} from '../models/user.js'


export const saveUser =  async(userLike) => {

    const user = new User(userLike);

    if (user.id()) {
    throw 'user no implemtado';
    return;
    }

    const  updateUser = await createUser (user);
    return updateUser;

}

const createUser =  async (user) => {
 const URL = `${import.meta.env.VITE_API_URL}/users`;
 const response = await fetch(URL, {
     method: 'POST',
     body: JSON.stringify(user),
     headers: {
         'Content-Type': 'application/json',
     },
 });

 const newUser = await response.json();
 console.log(newUser);
 return newUser;



};