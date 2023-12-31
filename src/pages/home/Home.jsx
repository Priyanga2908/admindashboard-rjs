import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Widget from "../../components/widget/Widget";
import Chart from "../../components/chart/Chart";
import Featured from "../../components/featured/Featured";
import Tab from "../../components/table/Table";
import "./home.scss";
const Home = () => {
    return (
        <div className="home">
            <Sidebar/>
            <div className="homeContainer">
                <Navbar/>
                <div className="widgets">
                <Widget type="user"/>
                <Widget type="order"/>
                <Widget type="earning"/>
                <Widget type="balance"/>
                
                </div>
                <div className="charts">
                  <Featured/>
                  <Chart/>
                </div>
                <div className="listContainer">
                    <div className="listTitle">
                        Latest Transactions
                        <Tab/>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Home;