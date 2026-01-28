import Experiences from "../../components/Experiences/Experiences";
import Navbar from "../../components/Navbar/Navbar";
import ProjectGallery from "../../components/ProjectGallery/ProjectGallery";
import ProjectSlider from "../../components/ProjectSlider/ProjectSlider";
import WordRotator from "../../components/WordRotator/WordRotator";
import "./Home.css";

const Home = () => {

    return (
        <div>
            <Navbar />
            <div className="center">
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
                        <p>
                            Olá! Sou João Vitor Maganin, desenvolvedor Full Stack formado em Ciência da Computação. 
                            Com experiência prática como analista de sistemas, hoje foco em construir aplicações funcionais e seguras 
                            utilizando Java, Python e frameworks modernos como React e Angular. Tenho vivência em ambientes 
                            corporativos e projetos freelancer, onde desenvolvi a habilidade de transformar requisitos de negócio 
                            em código eficiente, sempre buscando aprender e aplicar as melhores práticas do mercado.
                        </p>
                    </div>
                </section>

                <section className="my-experiences">
                    <Experiences />
                </section>

                <section className="my-experiences">
                    <ProjectGallery />
                </section>
            </div>
        </div>
    )
}

export default Home;