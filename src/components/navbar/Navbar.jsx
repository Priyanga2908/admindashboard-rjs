import "./navbar.scss"
import  SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import  LanguageOutlinedIcon  from "@mui/icons-material/LanguageOutlined";
import  DarkModeOutlined  from "@mui/icons-material/DarkModeOutlined";
import  FullscreenExitOutlined from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import  ChatBubbleOutlineOutlined  from "@mui/icons-material/ChatBubbleOutlineOutlined";
import  ListOutlined  from "@mui/icons-material/ListOutlined";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";
const Navbar = () => {

    const {dispatch}=useContext(DarkModeContext)
    return (
        <div className="navbar">
            <div className="wrapper">
                <div className="search">
                    <input type="text" placeholder="Search..."/>
                    <SearchOutlinedIcon/>
                </div>
                <div className="items">
                    <div className="items">
                    <LanguageOutlinedIcon className="icon"/>
                        English
                    </div>
                    <div className="items">
                    <DarkModeOutlined className="icon" onClick={()=>dispatch({type:"TOGGLE"})}/>
                    
                    </div>
                    <div className="items">
                    <FullscreenExitOutlined className="icon"/>
                    
                    </div>
                    <div className="items">
                    <NotificationsNoneOutlinedIcon className="icon"/>
                    <div className="counter">1</div>
                    </div>
                    <div className="items">
                    <ChatBubbleOutlineOutlined className="icon"/>
                    <div className="counter">2</div>
                    </div>
                    <div className="items">
                    <ListOutlined className="icon"/>
                    </div>
                    <div className="items">
                    <img src="https://images.pexels.com/photos/11009273/pexels-photo-11009273.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" className="avatar"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Navbar;