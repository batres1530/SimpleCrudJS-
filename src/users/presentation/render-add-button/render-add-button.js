import { showModal } from '../render-modal/render-modal';
import './render-add-button.css';

export const  renderAddButton = (element) => {

    const fabButton = document.createElement('button');
    fabButton.innerText = '+';
    fabButton.classList.add('fad-button');
    element.append(fabButton);

    fabButton.addEventListener( 'click', async() =>{
        showModal();

    });

}