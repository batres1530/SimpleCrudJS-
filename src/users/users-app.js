import { renderTable } from "./presentation/render-table/render-table-";
import usersStore from "./store/users-store";
import { renderButtons } from "./presentation/render-buttons/render-buttons";



export const UserAppp = async (element) => {

    element.innerHTML = 'Loading...';
    await usersStore.loandNextPage();
    element.innerHTML = '';
    
    renderTable(element);
    renderButtons(element);

};