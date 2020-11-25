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
                
            <li className="nav-item"><NavLink to="/index"  className="nav-link" activeClassName="active">About</NavLink></li>
            <li className="nav-item"><NavLink to="/contact" className="nav-link" activeClassName="active">Contact</NavLink></li>
            <li className="nav-item"><NavLink to="/portfolio" className="nav-link" activeClassName="active">Portfolio</NavLink></li>
            </ul>
        </section>
    </nav>
    )
}

export default Header;