import { loadUsers } from "../users-case/load-users-by-page"


const state = {
  currentPage: 0,
  users: []

}
const  loandNextPage = async () => {
const user = await loadUsers(state.currentPage + 1);
    if (user.length > 0) return;
    state.currentPage += 1;
    state.users =  user
}
const  loadPreviousPage = async () => {
    throw new Error('Not implemented')
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

    getUser: () => [...state.users],
    getCurentPage: () => state.currentPage,

}