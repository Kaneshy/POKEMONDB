'use client'
import '@/styles/searchTarjet.css'
import '@/styles/cardspokemon.css'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import axios from "axios";

const FetchApi = async (search, page) => {
    try {
        const response = await axios.get(`https://api.pokemontcg.io/v2/cards?q=name:${search}`, {
            params: {
                pageSize: 15,
                page: page
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

function SearchTarjet() {
    const [search, setsearch] = useState('pikachu')
    const [datachange, setdatachange] = useState([])
    const [action, setaction] = useState(false)
    const [page, setPage] = useState(1)


    const handleInputChange = (e) => {
        setsearch(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        callFetchCards()
    }

    const nextPage = () => {
        return setPage(page + 1)
    }

    const prevPage = () => {
        if (page === 1) {
            return page
        }
        return setPage(page - 1)
    }

    const callFetchCards = async () => {
        const dataCards = await FetchApi(search, page)
        console.log(dataCards)
        const poke = dataCards.data
        setdatachange(poke)
        setaction(true)
    }

    useEffect(() => {
        callFetchCards();
    }, [page]);


    return (
        <section>
            <div className='container-form' >
                <h1 className="title" >POKEDEX</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Pokemon Name. Ej: Pikachu"
                        value={search}
                        onChange={handleInputChange}
                    />
                    <button type="submit" className="search-button" >Search</button>
                </form>
            </div>
            <section className="container-images" >
                {action ? (
                    datachange.map((card) => {
                        return (
                            <Link target='_blank' href={`/pokemoncards/${card.id}`} className="card" key={card.id} >
                                <h2>{card.name}</h2>
                                <img loading="lazy" width={200} src={card.images.small} alt="" />
                            </Link>
                        )
                    })
                ) : (
                    <div className='isLoadingAcion' >
                        <img width={250} src="https://i.ibb.co/cvwtwmc/jiggly.webp" alt="jiggly" border="0" />
                        <div  >loading cards, please wait.</div>
                    </div>
                )}
            </section>
            <div className="btn-prev-nextpage" >
                <button className="btn btn-primary" onClick={prevPage} >Previous Page</button>
                <button className="btn btn-primary" onClick={nextPage} >Next Page</button>
            </div>
        </section>
    )
}

export default SearchTarjet