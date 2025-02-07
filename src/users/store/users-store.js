import { loadUsers } from "../users-case/load-users-by-page"


const state = {
  currentPage: 0,
  users: []

}
const  loandNextPage = async () => {
    await loadUsers(state.currentPage + 1);
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