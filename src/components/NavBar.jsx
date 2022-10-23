import CartWidget from "./CartWidget";
import LogoRuns from "../images/RunsLogo.png";

function NavBar() {
  return (
    <div>
      <nav className="nav">
        <a href="/" className="navbar-brand">
            <img src={LogoRuns} alt="/" />
        </a>
        <ul className="nav__list">
          <li className="active">
            <a href="/Category">Categorías</a>
          </li>
          <li className="active">
            <a href="/Ofertas">Ofertas</a>
          </li>
          <li className="active">
            <a href="/TiendasOficiales">Tiendas oficiales</a>
          </li>
          <li className="active">
            <a href="/Vender">Vender</a>
          </li>
        </ul>
        <CartWidget></CartWidget>
      </nav>
    </div>
  );
}
export default NavBar;
