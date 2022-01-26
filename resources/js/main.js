import Header from './components/header';
import Footer from './components/footer';
import Sidebar from './components/sidebar';
import Menu from './components/menu';


import { Outlet} from "react-router-dom";

const App = () => {
  return (
    <>
      <Header />
      <div id="mainContent" className="container-fluid mt-5">
        <div className="row">
          <div id="subSidebar" className="col-md-2 p-3">
            <Sidebar />
          </div>
          <div id="subContent" className="col-md-8 p-3">
            <Outlet />
          </div>
          <div id="subMenu" className="col-md-2 p-3">
            <Menu />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
};

export default App;