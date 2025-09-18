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

            <section className="about-me">
                <div>
                    <p>Muito prazer! Me chamo João Vitor Maganin, sou um desenvolvedor fullstack brasileiro,
                    formado em Ciência da Computação e possuo experiência profissional como analista de sistemas.
                    Sou apaixonado por novas tecnologias e por resolver problemas, sou movido a desafios.
                    </p>
                </div>
            </section>
        </div>
    )
}

export default Home;