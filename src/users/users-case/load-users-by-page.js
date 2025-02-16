import { localhostUserToModel } from "../mappers/localhost-user.mapper";

export const loadUsers = async (page = 1) => {
    try {
        const url = new URL(`${import.meta.env.VITE_BASE_URL}/users`);
        url.searchParams.append('_page', page.toString());

        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const { data } = await response.json();
        
        if (!Array.isArray(data)) {
            throw new Error('Expected data to be an array');
        }

        return data.map(localhostUserToModel);
    } catch (error) {
        console.error('Error loading users:', error);
        throw new Error('Failed to load users. Please try again later.');
    }
}