import usersStore from "../../store/users-store";
import './render-buttons.css';

export const renderButtons = (element) => {

    const nextButton = document.createElement('button');
    nextButton.innerText = ' Next >';

    const prevButton = document.createElement('button');
    prevButton.innerText = '< Prev ';

    const currentPageLabel = document.createElement('span');
    currentPageLabel.id = 'current-page';
    currentPageLabel.innerText = usersStore.getCurentPage();

    element.append(prevButton, currentPageLabel, nextButton);

    
}