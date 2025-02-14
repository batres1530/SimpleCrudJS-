import { renderTable } from "./presentation/render-table/render-table-";
import usersStore from "./store/users-store";
import { renderButtons } from "./presentation/render-buttons/render-buttons";
import {renderAddButton} from './presentation/render-add-button/render-add-button' 
import {renderModal} from './presentation/render-modal/render-modal'
import {saveUser} from './users-case/save-user.js'




export const UserAppp = async (element) => {

    element.innerHTML = 'Loading...';
    await usersStore.loandNextPage();
    element.innerHTML = '';
    
    renderTable(element);
    renderButtons(element);
    renderAddButton(element);
    renderModal(element, async(usrLike) => {
      const user = await saveUser(usrLike);
      usersStore.onUserChanged(user);
      renderTable();
    });
    
};