import  './render-table.css'

let table;

 const createTable = () => {
     const table = document.createElement('table');
     const tableHead = document.createElement('thead');
     tableHead.innerHTML = `
      <tr>
        <th>ID</th><
        <th>Balance</th><
        <th>First Name</th><
        <th>Last Name</th><
        <th>Active</th><
        <th>Actions</th><
      </tr>
     
     `;

     const tableBody = document.createElement('tbody');
     tableBody.append(tableHead, tableBody);
     return table;
     
 }

export const renderTable = (element) => {

    const users = usersStore.getUser();

    if (!table) {
        table = createTable(); 
        element.append(table);
        // TODO: listener a la tabla
    }


}
    
