import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import './Footer.css';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer-container">
            <div className="footer-content">
                <div className="footer-info">
                    <h3 className="footer-logo">João Vitor<span>.Maganin</span></h3>
                    <p className="footer-tagline">
                        Desenvolvedor Full Stack & Analista de Sistemas.
                    </p>
                </div>

                <div className="footer-socials">
                    <a href="https://github.com/JoaoMaganin" target="_blank" rel="noreferrer" aria-label="GitHub">
                        <GitHubIcon />
                    </a>
                    <a href="https://linkedin.com/in/joaovm" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                        <LinkedInIcon />
                    </a>
                    <a href="mailto:joaovitormontemor138@gmail.com" aria-label="Email">
                        <MailOutlineIcon />
                    </a>
                    <a href="https://wa.me/5524988193826" target="_blank" rel="noreferrer" aria-label="WhatsApp">
                        <WhatsAppIcon />
                    </a>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; {currentYear} — Desenvolvido com React e TypeScript por João Vitor Maganin.</p>
            </div>
        </footer>
    );
};

export default Footer;