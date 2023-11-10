import axios from "axios";
import '@/styles/cardspokemon.css'

const FetchApi = async (search) => {

    try {
        const response = await axios.get(`https://api.pokemontcg.io/v2/cards?q=name:${search}` , {
            params: {
                pageSize: 15,
                page: 1
            }
        })
        const data = response.data
        return data
    } catch (error) {
        console.error('Error al obtener los datos de la API:', error);
        return {
            props: {
                data: null,
            },
        };
    }
}

export default FetchApi

