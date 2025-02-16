import './style.css';
import javascriptLogo from './javascript.svg';
import viteLogo from '/vite.svg';
import { createUsersApp } from './users/users-app.js';

const initializeApp = async () => {
    try {
        document.querySelector('#app').innerHTML = `
            <div class="app-container">
                <header class="app-header">
                    <a href="https://vite.dev" target="_blank">
                        <img src="${viteLogo}" class="logo" alt="Vite logo" />
                    </a>
                    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
                        <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
                    </a>
                    <h1>Welcome to Mi app con Vite</h1>
                </header>
                <main class="card">
                    <div id="users-content"></div>
                </main>
            </div>
        `;

        const element = document.querySelector('#users-content');
        await createUsersApp(element);
    } catch (error) {
        console.error('Error initializing application:', error);
        document.querySelector('#app').innerHTML = `
            <div class="error-container">
                <h2>Error</h2>
                <p>Lo sentimos, ha ocurrido un error al cargar la aplicación.</p>
            </div>
        `;
    }
};

document.addEventListener('DOMContentLoaded', initializeApp);
