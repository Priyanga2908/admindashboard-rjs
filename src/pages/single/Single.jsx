
import Chart from "../../components/chart/Chart"
import Navbar from "../../components/navbar/Navbar"
import Sidebar from "../../components/sidebar/Sidebar"
import Tab from "../../components/table/Table";

import "./single.scss"
const Single = () => {
    return (
        <div className="single">
            <Sidebar/>
            <div className="singleContainer">
                <Navbar/>
                <div className="top">
                <div className="left">
                    <div className="editButton">edit</div>
                    <h1 className="title">Information</h1>
                    <div className="item">
                        <img src="https://images.pexels.com/photos/16977880/pexels-photo-16977880/free-photo-of-woman-sitting-on-stone-bench.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" 
                        alt="" className="itemImg" />
                        <div className="details">
                            <h1 className="itemTitle">Jane Doe</h1>
                            <div className="detailItem">
                                <span className="itemKey">Email:</span>
                                <span className="itemValue">jandoe@mail.com</span>
                                
                            </div>
                            <div className="detailItem">
                                <span className="itemKey">Phone:</span>
                                <span className="itemValue">+91 94561 78999</span>
                                
                            </div>
                            <div className="detailItem">
                                <span className="itemKey">Address:</span>
                                <span className="itemValue">12,elm street,cambridge</span>
                                
                            </div>
                            <div className="detailItem">
                                <span className="itemKey">Country:</span>
                                <span className="itemValue">USA</span>
                                
                            </div>
                            
                        </div>
                    </div>

                </div>
                <div className="right">
                    <div className="error">
                    <Chart/>   
                    </div>
                 
                </div>
                </div>
                
                <div className="bottom">
                    <h1 className="title">Last Transactions</h1>
                <Tab/>
                </div>
                
            </div>
        </div>
    )
}
export default Single
