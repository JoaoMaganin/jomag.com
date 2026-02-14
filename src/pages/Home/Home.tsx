import React, { useRef } from 'react';
import Experiences from "../../components/Experiences/Experiences";
import Navbar from "../../components/Navbar/Navbar";
import ProjectSlider from "../../components/ProjectSlider/ProjectSlider";
import WordRotator from "../../components/WordRotator/WordRotator";
import ProjectGallery from "../../components/ProjectGallery/ProjectGallery";
import "./Home.css";
import Footer from '../../components/Footer/Footer';
import Skills from '../../components/Skills/Skills';
import { SKILLS_LIST } from '../../constants/skills';
import { PROJECT_IMAGES, PROJECTS } from '../../constants/projects';

const Home: React.FC = () => {
    // Definimos o tipo como HTMLDivElement para evitar o erro de 'never'
    const galleryRef = useRef<HTMLDivElement>(null);

    const scrollToGallery = () => {
        // O check opcional ?. garante que não quebre se o ref for nulo
        galleryRef.current?.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start' // Garante que alinhe no topo da seção
        });
    };

    return (
        <div>
            <Navbar />
            <div className="center">
                <section className="main-section">
                    <div className="word-rotator-section">
                        <WordRotator skills={SKILLS_LIST} period={3000} />
                    </div>
                    {/* Envolvemos o slider em uma div que intercepta o clique na Home */}
                    <div 
                        className="project-slider-section" 
                        onClick={scrollToGallery} 
                        style={{ cursor: 'pointer' }}
                    >
                        <ProjectSlider images={PROJECT_IMAGES} />
                    </div>
                </section>

                <section className="about-me">
                    <p>
                        Olá! Sou desenvolvedor Full Stack formado em Ciência da Computação. 
                        Com experiência prática como analista de sistemas, hoje foco em construir aplicações funcionais e seguras 
                        utilizando Java, Python e frameworks modernos como React e Angular. Tenho vivência em ambientes 
                        corporativos e projetos freelancer, onde desenvolvi a habilidade de transformar requisitos de negócio 
                        em código eficiente, sempre buscando aprender e aplicar as melhores práticas do mercado.
                    </p>
                    <Skills />
                </section>

                <section className="my-experiences">
                    <Experiences />
                </section>

                {/* Usamos uma div de ancoragem com a Ref */}
                <div ref={galleryRef} style={{ scrollMarginTop: '20px' }}>
                    <section className="my-experiences">
                        <ProjectGallery projects={PROJECTS} />
                    </section>
                </div>
            </div>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}

export default Home;