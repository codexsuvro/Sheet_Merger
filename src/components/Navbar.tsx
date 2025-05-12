import { useLocation } from "react-router-dom";
import Images from "../assets/index.ts";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from "react-router-dom";

const Navbar = () => {
    const location = useLocation();

    return (
        <div className={`h-[12%] w-full shadow-2xl flex justify-between items-center bg-white ${location.pathname === `/` ? `` : `fixed top-0 left-0 z-50`} `}>
            <img src={Images.tcs_logo} className={`px-4 py-2 h-full w-[200px] object-cover`}></img>
            <Link to="/">
                <p className={`font-bold font-serif text-3xl bg-gradient-to-r from-[#314b9e] via-[#a0358c] to-[#ce2d2d] bg-clip-text text-transparent`}>LDM Sheet Merger</p>
            </Link>
            <div className={`flex pl-4 pr-8 gap-8 py-2 w-auto`}>
                <AccountCircleIcon fontSize="large" className="cursor-pointer" />
            </div>
        </div>
    )
}

export default Navbar;