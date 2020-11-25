import { NavLink } from 'react-router-dom';

function Header () {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <NavLink to="/index" className="navbar-brand">Garman Kwan</NavLink>
       
        <section className="collapse navbar-collapse" id="navbarToggler">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <NavLink to="/index"  activeClassName="active">About</NavLink>
                <NavLink to="/contact" activeClassName="active">Contact</NavLink>
                <NavLink to="/portfolio" activeClassName="active">Portfolio</NavLink>
            </ul>
        </section>
    </nav>
    )
}

export default Header;