import usersStore from "../../store/users-store";
import { showModal } from "../render-modal/render-modal";
import './render-table.css';


let table;

const createTable = () => {
    const table = document.createElement('table');
    const tableHeaders = document.createElement('thead');
    tableHeaders.innerHTML = `
        <tr>
            <th>ID</th>
            <th>Balance</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Active</th>
            <th>Actions</th>
        </tr>
    `;

    const tableBody = document.createElement('tbody');
    table.append(tableHeaders, tableBody); // Agrega los elementos a la tabla
    return table;
};

const tableSelectListener = (e) => {
   const elements = e.target.closest('.select-user');
   if (!elements) return;
   
    const id = elements.getAttribute('data-id');
     showModal(id);
}   


export const renderTable = (element) => {
    const users = usersStore.getUsers();
    
    if (!table) {
        table = createTable();
        element.append(table);
        table.addEventListener('click', tableSelectListener );
    }

    let tableHTML = '';
    users.forEach(user => {
        tableHTML += `
            <tr>
                <td>${user.id}</td>
                <td>${user.balance}</td>
                <td>${user.firstName}</td>
                <td>${user.lastName}</td>
                <td>${user.isActive}</td>
                <td>
                    <a href="#/" class="select-user" data-id="${user.id}">Select</a>
                    |
                    <a href="#/" class="delete-user" data-id="${user.id}">Delete</a>
                </td>
            </tr>
        `;
    });

    table.querySelector('tbody').innerHTML = tableHTML;
};
    
