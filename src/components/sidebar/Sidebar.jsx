import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import StoreMallDirectoryIcon from '@mui/icons-material/StoreMallDirectory';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SystemSecurityUpdateGoodIcon from '@mui/icons-material/SystemSecurityUpdateGood';
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import PsychologyIcon from '@mui/icons-material/Psychology';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import {Link} from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";

const Sidebar = () => {
  const {dispatch}=useContext(DarkModeContext)
    return (
     <div className='sidebar'>
          <div className="top">
            <Link to="/" style={{textDecoration:"none"}}>
            <span className="logo">Unicorn</span>
            </Link>
            
            </div>
            <hr/>
           <div className="center">
             <ul>
              <p className="title">MAIN</p>
                <li>
                  <DashboardIcon className="icon"/>
                   <span>DashBoard</span>
                </li>
                <p className="title">LISTS</p>
                <Link to="/users" style={{textDecoration:"none"}}>
                <li>
                <PersonOutlineIcon className="icon"/>
                   <span>Users</span>
                </li>
                </Link>
                <Link to="/products" style={{textDecoration:"none"}}>
                <li>
                  <StoreMallDirectoryIcon className="icon"/>
                   <span>Products</span>
                </li>
                </Link>
                <li>
                  <LocalGroceryStoreIcon className="icon"/>
                   <span>Orders</span>
                </li>
                <li> 
                  <LocalShippingIcon className="icon"/>
                  <span>Delivery</span>
                </li>
                <p className="title">USEFUL</p>
                <li>
                  <AnalyticsIcon className="icon"/> 
                  <span>stats</span>
                </li>
                <li>
                  <NotificationsIcon className="icon"/> 
                  <span>Notifications</span>
                </li>
                <p className="title">SERVICE</p>
                <li> 
                  <SystemSecurityUpdateGoodIcon className="icon"/>
                  <span>System Health</span>
                </li>
                <li> 
                  <PsychologyIcon className="icon"/>
                  <span>Logs</span>
                </li>
                <li> 
                  <SettingsApplicationsIcon className="icon"/>
                  <span>Settings</span>
                </li>
                <p className="title">USER</p>
                <li> 
                  <PersonPinIcon className="icon"/>
                  <span>Profile</span>
                </li>
                <li> 
                  <LogoutIcon className="icon"/>
                  <span>Logout</span>
                </li>
                
                
             </ul>
            </div>
          <div className="bottom">
            <div className="coloroptions" onClick={()=>dispatch({type:"LIGHT"})}></div>
            <div className="coloroptions" onClick={()=>dispatch({type:"DARK"})}></div>

           
          </div>
      </div>
    );
};
export default Sidebar;