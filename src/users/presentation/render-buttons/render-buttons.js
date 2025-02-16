import { renderTable } from '../render-table/render-table-';
import './render-buttons.css';

export const renderButtons = (element) => {
    const usersStore = element.usersStore;
    if (!usersStore) {
        console.error('UsersStore not found in element');
        return;
    }

    const nextButton = document.createElement('button');
    nextButton.innerText = ' Next >';

    const prevButton = document.createElement('button');
    prevButton.innerText = '< Prev ';

    const inicioButton = document.createElement('button');
    inicioButton.innerText = ' Inicio ';

    const finButton = document.createElement('button');
    finButton.innerText = ' Final ';

    const currentPageLabel = document.createElement('span');
    currentPageLabel.id = 'current-page';
    currentPageLabel.innerText = usersStore.getCurrentPage();

    element.append(inicioButton, prevButton, currentPageLabel, nextButton, finButton);

    nextButton.addEventListener('click', async () => {
        await usersStore.loadNextPage();
        currentPageLabel.innerText = usersStore.getCurrentPage();
        renderTable(element, usersStore.getUsers());
    });

    prevButton.addEventListener('click', async () => {
        await usersStore.loadPreviousPage();
        currentPageLabel.innerText = usersStore.getCurrentPage();
        renderTable(element, usersStore.getUsers());
    });

    inicioButton.addEventListener('click', async () => {
        await usersStore.inicioButton();
        currentPageLabel.innerText = usersStore.getCurrentPage();
        renderTable(element, usersStore.getUsers());
    });

    finButton.addEventListener('click', async () => {
        await usersStore.finButton();
        currentPageLabel.innerText = usersStore.getCurrentPage();
        renderTable(element, usersStore.getUsers());
    });
};