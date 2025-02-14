import modalHtml from  './render-modal.html?raw';
import './render-modal.css';
let modal, from;

//todo: cargar el usario por id
export const showModal = ()=>{
    modal?.classList.remove('hide-modal');
}

export const hideModal = ()=>{
    modal?.classList.add('hide-modal');
}

export const  renderModal = (element) => {
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

    from.addEventListener('submit', (evento)=>{
        evento.preventDefault();
    
        const fromdata = new FormData(from);

        for (const iterador of fromdata) {
            console.log(iterador);
        }

    });

    element.append(modal);

}