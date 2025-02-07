import usersStore from "./store/users-store";



export const UserAppp = async (element) => {
    element.innerHTML = 'Loading...';
    await usersStore.loandNextPage();
};