import Link from "next/link"
import '@/styles/navBar.css'

function NavBar() {
    return (
        <nav className="navbar" >
            <div className="container mx-auto flex justify-between items-center p-3 " >
                <Link href={'/'} >
                    <h3>POKEMON</h3>
                </Link>
                <ul className="flex gap-4 text-lg" >
                    <li className="flex gap-4" >
                        <Link className="Links" href='/pokemon' >
                            Img PNG
                        </Link>
                        <Link className="Links" href='/pokemoncards' >
                            cards
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar