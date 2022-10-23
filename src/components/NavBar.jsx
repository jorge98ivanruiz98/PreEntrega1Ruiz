import CartWidget from "./CartWidget";
import LogoRuns from "../images/RunsLogoWhite.png";

function NavBar({ setValorNuevo }) {

  return (
    <div>
      <nav className="nav">
        <a onClick={() => setValorNuevo('Bienvenido a RunStore')} className="navbar-brand">
            <img src={LogoRuns} alt="/" />
        </a>
        <ul className="nav__list">
          <li className="active">
            <a onClick={() => setValorNuevo('Estoy en categorias')}>Categorías</a>
          </li>
          <li className="active">
            <a onClick={() => setValorNuevo('Estoy en Ofertas')}>Ofertas</a>
          </li>
          <li className="active">
            <a onClick={() => setValorNuevo('Estoy en tiendas oficiales')}>Tiendas oficiales</a>
          </li>
          <li className="active">
            <a onClick={() => setValorNuevo('Estoy en Vender')}>Vender</a>
          </li>
        </ul>
        <CartWidget/>
      </nav>
    </div>
  );
}
export default NavBar;
