import axios from 'axios';


export const client = axios.create({
    baseURL: 'https://raider.io/api/v1',
});

export const MYTHIC_ROUTE = '/mythic-plus/affixes?region=us&locale=en';
