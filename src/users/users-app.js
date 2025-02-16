import { renderTable } from "./presentation/render-table/render-table-";
import { renderButtons } from "./presentation/render-buttons/render-buttons";
import { renderAddButton } from './presentation/render-add-button/render-add-button';
import { renderModal } from './presentation/render-modal/render-modal';
import { saveUser } from './users-case/save-user.js';
import { UsersStore } from "./store/users-store";

export class UsersApp {
    constructor(element) {
        this.element = element;
        this.usersStore = new UsersStore();
        this.element.usersStore = this.usersStore;
    }

    async initialize() {
        try {
            this.element.innerHTML = 'Loading...';
            await this.usersStore.inicioButton();
            this.element.innerHTML = '';
            this.renderComponents();
        } catch (error) {
            console.error('Error initializing app:', error);
            this.element.innerHTML = 'Error loading users. Please try again.';
        }
    }

    renderComponents() {
        renderTable(this.element, this.usersStore.getUsers());
        renderButtons(this.element);
        renderAddButton(this.element);
        this.setupModal();
    }

    setupModal() {
        renderModal(this.element, async (userLike) => {
            try {
                const user = await saveUser(userLike);
                this.usersStore.onUserChanged(user);
                renderTable(this.element, this.usersStore.getUsers());
            } catch (error) {
                console.error('Error saving user:', error);
            }
        });
    }
}

export const createUsersApp = async (element) => {
    const app = new UsersApp(element);
    await app.initialize();
    return app;
}