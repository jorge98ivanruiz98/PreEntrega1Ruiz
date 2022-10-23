import CartWidget from "./CartWidget";

function NavBar(){

    return (
        <nav className="nav">
            <a href="/" className="navbar-brand" >
            Coder jr
            </a>
            <ul className="nav__list">
                <li className="active">
                    <a href="/">Home</a>
                </li>
                <li className="active">
                    <a href="/cart">Cart</a>
                </li>
            </ul>
            <CartWidget></CartWidget>
        </nav>
        
    )
}
export default NavBar;