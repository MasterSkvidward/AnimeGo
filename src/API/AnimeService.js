import axios from "axios"

export default class AnimeService {
    static async getAnimeOrderedBy(order_by='start_date', sort='desc', limit=20, page=1) {
        const response = await axios.get(`https://api.jikan.moe/v4/anime`,
            {
                params: {
                    order_by: order_by,
                    sort: sort,
                    limit,
                    page,
                    status: 'airing, complete',
                    min_score: 0.01,
                    start_date: '1900',
                    sfw: false,
                }
            });
        return response.data.data;    
    }

    static async getAnimeByTitle(letter='a', page=1, amount=3) {
        const response = await axios.get(`https://api.jikan.moe/v4/anime`,
            {
                params: {
                    letter: letter,
                    page,
                    min_score: 0.01,
                    order_by: 'score',
                    sort: 'desc',
                    sfw: false,
                }
            });

        return [response.data.data.slice(0, amount), response.data.pagination.items.total];    
    }

    static async getAnimeFullById(id) {
        const response = await axios.get(`https://api.jikan.moe/v4/anime/${id}/full`);

        return response.data.data;    
    }

    static async getSeasonNow(limit=20, order_by='score') {
        const response = await axios.get(`https://api.jikan.moe/v4/seasons/now`,
            {
                params: {
                    limit: limit,
                    min_score: 0.01,
                    order_by: order_by,
                    sort: 'desc',
                    sfw: false,
                }
            });

        return response.data.data;   
    }
}
