import Navbar from "../../components/Navbar/Navbar";
import WordRotator from "../../components/WordRotator/WordRotator";
import "./Home.css";

const Home = () => {

    return (
        <div>
            <Navbar />
            <section style={{ width: "100%" }}>
                <WordRotator />
            </section>
        </div>
    )
}

export default Home;