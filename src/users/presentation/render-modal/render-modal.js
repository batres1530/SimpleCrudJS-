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



    modal.addEventListener('click', (eventos)=>{
      if (eventos.target.className === 'modal-cantainer') {
        hideModal();
      }

    });

    from.addEventListener('submit', async (evento)=>{
        evento.preventDefault();
    
        const fromdata = new FormData(from);
        const userlike = {};

        for (const [key, value] of fromdata) {
            if (key === 'balance') {
                userlike[key] = +value;
                continue;
        }

        if (key === 'isActive') {
            userlike[key] = value === 'on'? true: false;
            continue;
        }
        userlike[key] = value;
    }
        //Todo  :  guardar el usuario en la base de datos
        await callback(userlike);
        hideModal();
    });

    element.append(modal);

}