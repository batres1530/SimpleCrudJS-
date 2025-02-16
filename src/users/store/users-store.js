import { loadUsers } from "../users-case/load-users-by-page";

export class UsersStore {
    constructor() {
        this.state = {
            currentPage: 0,
            users: []
        };
    }

    async inicioButton() {
        const users = await loadUsers(1);
        if (users.length === 0) return;
        this.state.currentPage = 1;
        this.state.users = users;
    }

    async finButton() {
        const users = await loadUsers(7);
        if (users.length === 0) return;
        this.state.currentPage = 7;
        this.state.users = users;
    }

    async loadNextPage() {
        if (this.state.currentPage >= 7) return;
        const users = await loadUsers(this.state.currentPage + 1);
        if (users.length === 0) return;
        this.state.currentPage += 1;
        this.state.users = users;
    }

    async loadPreviousPage() {
        if (this.state.currentPage <= 1) return;
        const users = await loadUsers(this.state.currentPage - 1);
        if (users.length === 0) return;
        this.state.currentPage -= 1;
        this.state.users = users;
    }

    onUserChanged(updatedUser) {
        const userIndex = this.state.users.findIndex(user => user.id === updatedUser.id);
        if (userIndex >= 0) {
            this.state.users[userIndex] = updatedUser;
        } else {
            this.state.users.push(updatedUser);
        }
    }

    async reloadPage() {
        await loadUsers(this.state.currentPage);
    }

    getUsers() {
        return [...this.state.users];
    }

    getCurrentPage() {
        return this.state.currentPage;
    }
}