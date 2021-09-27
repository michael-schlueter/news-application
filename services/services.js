import { API_KEY, endpoint, country } from "../config/config";

export const services = async (category = 'general') => {
    let articles = await fetch(`${endpoint}?country=${country}&category=${category}`, {
        headers: {
            'X-API-KEY': API_KEY
        }
    });
    let result = await articles.json();
    articles = null;
    return result.articles;
};