import { Link, Outlet } from "react-router-dom";

function Adminlayout(){
    return(
        <div>
            <h1>This is admin page only accessible to admins</h1>
            <nav>
                <Link to ={"admindashboard"}>admindashboard</Link>
                <Link to ={"adminsettings"}>adminsettings</Link>
                <Link to ={"adminuserdetail"}>adminuserdetail</Link>
            </nav>
            <Outlet/>
        </div>
    )
}
export default Adminlayout