
import NavLinks from "../NavLinks/NavLinks"
import MyMovies from "../MyMovies/MyMovies"

const Header = () => {

    return(
        <header>
            <h1>MovieDB</h1>
            <div>
                <MyMovies />
                <NavLinks />
            </div>
        </header>

    )
}

export default Header