import { showModal } from '../render-modal/render-modal';
import './render-add-button.css';

export const renderAddButton = (element) => {
    const fabButton = document.createElement('button');
    fabButton.innerHTML = '<i>+</i>';
    fabButton.classList.add('fab-button');
    fabButton.setAttribute('title', 'Agregar nuevo usuario');
    element.append(fabButton);

    fabButton.addEventListener('click', () => {
        showModal();
    });
};