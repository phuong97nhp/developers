
import { Link } from "react-router-dom";

function Header() {
    return <header id="mainHeader" className="container-fluid" >
        <div className="row">
            <nav className="navbar bg-dark navbar-dark fixed-top">
                <div className="navbar-brand">
                    <Link to="/" id="logo">AZEXPRESS</Link>
                    <span> for Developers</span>
                </div>
                
                <ul className="nav justify-content-end">
                    {/* <li className="nav-item">
                        <Link className="nav-link" to="/about">Giới thiệu</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/document">Tài liệu</Link>
                    </li> */}
                    <li className="nav-item">
                        <Link className="nav-link" to="/support">Hỗ trợ</Link>
                    </li>
                </ul>
            </nav>
        </div>
    </header>;
}

export default Header;