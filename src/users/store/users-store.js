import { loadUsers } from "../users-case/load-users-by-page"


const state = {
  currentPage: 0,
  users: []

}
const inicioButton = async () => {
    const user = await loadUsers(1);
    if (user.length === 0) return;
    state.currentPage = 1;
    state.users =  user
}
const  finButton = async () => {
    const user = await loadUsers(7);
    if (user.length === 0) return;
    state.currentPage = 5;
    state.users =  user
}

const  loandNextPage = async () => {
    if (state.currentPage >= 7) return;
    const user = await loadUsers(state.currentPage + 1);
        if (user.length === 0) return;
        state.currentPage += 1;
        state.users =  user
}
const  loadPreviousPage = async () => {
    if (state.currentPage === 1) return;
    const user = await loadUsers(state.currentPage - 1);
        if (user.length === 0) return;
        state.currentPage -= 1;
        state.users =  user

   
}

// TODO: implemetar

const onUserChanged = ()=>{
    throw new Error('Not implemented')

}

const reloadPage = async () => {
    throw new Error('Not implemented')

}

export default {
    loandNextPage,
    loadPreviousPage,
    onUserChanged,
    reloadPage,
    inicioButton,
    finButton,
    getUsers: () => [...state.users],
    getCurrentPage: () => state.currentPage,

}