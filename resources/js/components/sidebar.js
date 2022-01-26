import { Link } from "react-router-dom";
function Sidebar() {
    return <div className="sidebarChild">
        <nav className="navbar">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link" to="/thong-tin-co-ban">Thông tin cơ bản</Link>
                </li>
                <h4>Đơn vận</h4>
                <li className="nav-item">
                    <Link className="nav-link" to="/tao-don-hang">Tạo đơn vận</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/chinh-don-van">Chỉnh đơn vận</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/xoa-don-van">Xóa đơn vận</Link>
                </li>
                <h4>Theo dõi</h4>
                <li className="nav-item">
                    <Link className="nav-link" to="/tracking-don-van">Tracking đơn vận</Link>
                </li>
                <h4>Địa chỉ</h4>
                <li className="nav-item">
                    <Link className="nav-link" to="/tinh-thanh-pho">Tỉnh/Thành phổ</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/quan-huyen">Quận/Huyện</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/xa-phuong">Xã/Phường</Link>
                </li>
            </ul>
        
        </nav>
    </div>;
}

export default Sidebar;