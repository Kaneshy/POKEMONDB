'use client'
import axios from "axios";
import '@/styles/pokemon.css'
import '@/styles/searchTarjet.css'
import { useState } from 'react'

const FetchApi = async (search) => {
    try {
        const searchLowerCase = search.toLowerCase()
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${searchLowerCase}/`)
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

    const [search, setsearch] = useState('')
    const [datachange, setdatachange] = useState({})
    const [action, setaction] = useState(false)

    const handleInputChange = (e) => {
        setsearch(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        callFetchCards()
    }

    const callFetchCards = async () => {
        const dataCards = await FetchApi(search)
        console.log(dataCards.name)
        setdatachange(dataCards)
        setaction(true)
    }

    return (
        <section>
            <div className='container-form' >
                <h1 className="title" >Buscador imagenes PNG</h1>
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
            {action ? (
                <section className="container-images" >
                <section className="containerfetchpokemon" >

                    <h2>Loading Pokedex</h2>
                    <div>name pokemon: {datachange.name} </div>
                    <div>height: {datachange.height} </div>
                    <div>weight: {datachange.weight} </div>
                    <div className="flex flex-col gap-1 p-1 justify-center containerB" >
                        <div><img className="img-pokemon" src={datachange.sprites.back_default} alt="" /></div>
                        <div><img className="img-pokemon" src={datachange.sprites.back_female} alt="" /></div>
                        <div><img className="img-pokemon" src={datachange.sprites.back_shiny} alt="" /></div>
                        <div><img className="img-pokemon" src={datachange.sprites.back_shiny_female} alt="" /></div>
                        <div><img className="img-pokemon" src={datachange.sprites.front_default} alt="" /></div>
                        <div><img className="img-pokemon" src={datachange.sprites.front_female} alt="" /></div>
                        <div><img className="img-pokemon" src={datachange.sprites.front_front_shiny} alt="" /></div>
                        <div><img className="img-pokemon" src={datachange.sprites.front_shiny_female} alt="" /></div>
                    </div>
                    <h3>dream world</h3>
                    <div className="flex flex-col gap-1 p-1 justify-center containerB" >
                        <div><img className="img-pokemon" src={datachange.sprites.other.dream_world.front_default} alt="" /></div>
                        <div><img className="img-pokemon" src={datachange.sprites.other.dream_world.front_female} alt="" /></div>
                        <div><img className="img-pokemon" src={datachange.sprites.other.home.front_default} alt="" /></div>
                        <div><img className="img-pokemon" src={datachange.sprites.other.home.front_female} alt="" /></div>
                        <div><img className="img-pokemon" src={datachange.sprites.other.home.front_shiny} alt="" /></div>
                        <div><img className="img-pokemon" src={datachange.sprites.other.home.front_shiny_female} alt="" /></div>
                    </div>
                </section>
            </section>
            ) : (
                <div className='isLoadingAcion' >
                    <img width={250} src="https://i.ibb.co/DGtqRcq/pngegg-1.png" alt="" />
                <div  >loading cards, please wait.</div>
            </div>
            )}
        </section>

    )
}

export default SearchTarjet