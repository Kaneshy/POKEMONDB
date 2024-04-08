import '@/styles/Mainpage.css'
import Link from 'next/link'

function MainPage() {
  return (
    <section className='containerMP' >
      <div className='cinfoMainpage' >
        <div className='info' >
          <h1>POKEDEX</h1>
          <p >Encuentra todas las cartas pokemon el la seccion CARDS e imagens PNG en la seccion Img PNG</p>
          <Link href='/pokemoncards' className='btn' >GET STARTED</Link>
        </div>
        <div>
          <img src="https://i.ibb.co/cvwtwmc/jiggly.webp" alt="jiggly" border="0" />
        </div>
      </div>
    </section>
  )
}

export default MainPage