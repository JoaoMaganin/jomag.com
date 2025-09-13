import Navbar from "../../components/Navbar/Navbar";
import ProjectSlider from "../../components/ProjectSlider/ProjectSlider";
import WordRotator from "../../components/WordRotator/WordRotator";
import "./Home.css";

const Home = () => {

    return (
        <div>
            <Navbar />
            <section className="main-section">
                <div className="word-rotator-section">
                    <WordRotator />
                </div>
                <div className="project-slider-section">
                    <ProjectSlider />
                </div>
            </section>
        </div>
    )
}

export default Home;