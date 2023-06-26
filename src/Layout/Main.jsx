import { Outlet } from "react-router-dom";
// import Footer from "../pages/Shared/Footer/Footer";
import NavBar from "../pages/Shared/Navbar/NavBar";


const Main = () => {
    return (
        <div className="bg-[#0b1120] text-white ">
            <NavBar></NavBar>
            <Outlet></Outlet>
            {/* <Footer></Footer> */}
        </div>
    );
};

export default Main;