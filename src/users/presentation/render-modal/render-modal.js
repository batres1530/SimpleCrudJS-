import modalHtml from  './render-modal.html?raw';
import './render-modal.css';
let modal, from;

//todo: cargar el usario por id
export const showModal = ()=>{
    modal?.classList.remove('hide-modal');
}

export const hideModal = ()=>{
    modal?.classList.add('hide-modal');
    from?.reset();
}

export const  renderModal = (element, callback) => {
    if (modal)  return;

    modal = document.createElement('div');
    modal.innerHTML = modalHtml;
    modal.className= 'modal-cantainer hide-modal';
    from = modal.querySelector('form');



    modal.addEventListener('click', (e)=>{
      if (e.target.className === 'modal-cantainer') {
        hideModal();
      }

    });

    from.addEventListener('submit', async (evento)=>{
        evento.preventDefault();
        
        const formData = new FormData(from);
        const userLike = {}; 

        for (const [key, value] of formData) {
            if (key === 'balance') {
                userLike[key] = +value;
                continue;
            }
            userLike[key] = value;
            if (key === 'isActive') {
                userLike[key] = (value === 'on')? true : false;
                continue;
              }
              userLike[key] = value;
        }
        // todo : guardar el usuario
        hideModal();
        console.log(userLike);
        await callback(userLike);
    });

    element.append(modal);

}