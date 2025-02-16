import modalHtml from  './render-modal.html?raw';
import './render-modal.css';
import { getUserById } from '../../users-case/get-user-by-id';
import {User} from  '../../models/user.js';

let modal, form;
let loadedUser = {};

//todo: cargar el usario por id
export const showModal = async(id)=>{
    modal?.classList.remove('hide-modal');
    if (!id) return;
    
    const user = await getUserById(id);
    setFormValues(user);
}

export const hideModal = ()=>{
    modal?.classList.add('hide-modal');
    form?.reset();
}

export const setFormValues = (user) => {
    form.querySelector('[name="firstName"]').value = user.firstName;
    form.querySelector('[name="lastName"]').value = user.lastName;
    form.querySelector('[name="balance"]').value = user.balance;
    form.querySelector('[name="isActive"]').checked = user.isActive;
    loadedUser = user;
}

export const  renderModal = (element, callback) => {
    if (modal)  return;

    modal = document.createElement('div');
    modal.innerHTML = modalHtml;
    modal.className= 'modal-cantainer hide-modal';
    form = modal.querySelector('form');

    modal.addEventListener('click', (e)=>{
      if (e.target.className === 'modal-cantainer') {
        hideModal();
      }
    });

    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        
        const formData = new FormData(form);
        const userLike = {}; 

        if (loadedUser.id) {
            userLike.id = loadedUser.id;
        }

        for (const [key, value] of formData) {
            if (key === 'balance') {
                userLike[key] = +value;
                continue;
            }
            if (key === 'isActive') {
                userLike[key] = value === 'on';
                continue;
            }
            userLike[key] = value;
        }
        await callback(userLike);
        hideModal();
    });

    element.append(modal);
}