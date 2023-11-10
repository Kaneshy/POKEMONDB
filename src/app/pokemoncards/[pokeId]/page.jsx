import axios from "axios";
import '@/styles/card.css'

async function cardPokemon(search) {

    try {
        const response = await axios.get(`https://api.pokemontcg.io/v2/cards/${search}`)
        const data = response.data
        return {
            props: {
                data,
                page: 1,
                pageSize: 10
            }
        };
    } catch (error) {
        console.log('error en [pokeId/page] ', error)
        return {
            props: {
                data: null,
            },
        };
    }
}

async function page({ params }) {

    const cards = await cardPokemon(params.pokeId)
    const card = cards.props.data.data

    return (
        <section className="containerCard" >
            <div className="img-card">
                <h1>{card.name}</h1>
                <img  src={card.images.large} alt="" />
            </div>
            <div className="info-card">
                <h1>Info</h1>
                <div className="info-card-short">
                    <div className="question">
                        <p>name: </p>
                        <p>hp: </p>
                        <p>type: </p>
                        <p>rarity: </p>
                        <p>artist</p>
                    </div>
                    <div className="answer">
                        <p>{card.name}</p>
                        <p>{card.hp}</p>
                        <p>{card.types[0]}</p>
                        <p>{card.rarity}</p>
                        <p>{card.artist}</p>
                    </div>
                </div>
                <h1>Abilities</h1>
                <div className="info-card-short">
                    <div className="question">
                        <p>name: </p>
                        <p>Ability: </p>
                    </div>
                    <div className="answer">
                        <p>pendiente</p>
                        <p>pendiente</p>
                    </div>
                </div>
                <h1>weakness</h1>
                <div className="info-card-short">
                    <div className="question">
                        <p>type: </p>
                        <p>value: </p>
                    </div>
                    <div className="answer">
                        <p>{card.weaknesses[0].type}</p>
                        <p>{card.weaknesses[0].value}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default page

