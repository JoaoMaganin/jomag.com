import Navbar from "../../components/Navbar/Navbar";
import "./Home.css";

const Home = () => {
    return (
        <div>
            <Navbar />
            <header style={{ width: "100%"}}>
                <p style={{color: "white", textAlign: "center"}}>
                    Portfolio <b>em construção...</b>
                </p>
            </header>
        </div>
    )
}

export default Home;