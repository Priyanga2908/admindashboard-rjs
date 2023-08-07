import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';
import "./new.scss"
import {useState} from "react";
const New = ({inputs,title}) => {

    const [file,setFile]=useState("");
   

    return (
        <div className="new">
            <Sidebar/>
            <div className="newContainer">
                <Navbar/>
                <div className="top">
                    <h1>{title}</h1>
                </div>
                <div className="bottom">
                    <div className="left">
                        <img src={file ? URL.createObjectURL(file):"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyAVwu_XEBGcBuntIBlqhDr9Q-hAJkb5brRg&usqp=CAU"} alt="" />
                    </div>
                    <div className="right">
                    <form> 
                        <div className="formInput">
                            <label htmlFor="file"> 
                            Image : <DriveFolderUploadOutlinedIcon className="icon"/>
                            </label>
                            <input type="file"
                             id="file" 
                            onChange={e=>setFile(e.target.files[0])}
                            style={{display:"none"}}/> 
                        </div>
                        {inputs.map((input)=>(
                        <div className="formInput" key={input.id}>
                            <label>{input.label}</label>
                            <input type={input.type} placeholder={input.placeholder}/> 
                        </div>
                        ))}
                       
                            <button>send</button>
                            </form>  
                       
                     </div>
                </div>
            </div>
        </div>
    )
}
export default New;

/* <div className="formInput">
                            <label>Name and Surname</label>
                             <input type="text" placeholder="Jane Doe"/> 
                        </div>
                            <div className="formInput">
                                <label>Email</label>
                                <input type="email" placeholder="janedoe@gmail.com"/> 
                            </div>
                           
                            <div className="formInput">
                                <label>Phone</label>
                                <input type="text" placeholder="+91 34556 78956"/> 
                            </div>
                            <div className="formInput">
                                <label>Password</label>
                                <input type="password"/> 
                            </div>
                            <div className="formInput">
                                <label>Address</label>
                                <input type="text" placeholder="Elton street,12 colony,New York"/> 
                            </div>
                            <div className="formInput">
                                <label>Country</label>
                                <input type="text" placeholder="USA"/> 
                            </div>*/