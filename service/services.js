import { API_KEY,endpoint,country } from '../config/config'
export async function services(category="general") {
    let articles = await fetch(`${endpoint}?country=${country}&apiKey=${API_KEY}&category=${category}`,{
        headers:{
            'x-API-KEY': API_KEY,
        }
    });
    let results = await articles.json()
    articles=null;
    return results.articles
    
}
