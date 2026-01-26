import React from 'react';
import './Experiences.css';

const Experiences = () => {
    const experiences = [
        {
            empresa: "BNDES",
            cargo: "Estagiário em Desenvolvimento de Software",
            duracao: "JAN/2024 — JUN/2025",
            atividades: [
                "Ecossistema Microsoft & Cloud: Arquitetura e implementação de nova Intranet corporativa via SharePoint, desenvolvendo Web Parts personalizadas com ReactJS e consumo de dados complexos através da Microsoft Graph API (REST).",
                "Atualização e manutenção de sistemas legados: Desenvolvimento de sistemas corporativos utilizando JavaEE no ecossistema de back-end e Angular no front-end, garantindo interfaces responsivas e integrações robustas.",
                "Banco de Dados: Otimização e manutenção de Views distribuídas em bancos de dados, garantindo a integridade e a performance das informações para clientes internos.",
                "Segurança e Qualidade: Atuação proativa na correção de vulnerabilidades críticas e melhorias de segurança, utilizando Dependency-Track (DepTrack) para monitoramento e mitigação de riscos em cadeias de suprimento de software.",
                "Automação: Manutenção de scripts de automação em Bash, otimizando processos recorrentes e rotinas de deploy/manutenção.",
                "Manutenção e desenvolvimento de CMS: Manutenção e desenvolvimento de novas features em gerenciadores de conteúdo legados em JSP, garantindo a estabilidade de ferramentas CMS essenciais para a operação bancária."
            ],
            techs: ["JavaEE", "Angular", "React", "Oracle", "SQL Server", "Bash", "Sharepoint"]
        },
    ];

    return (
        <section className="experience-container">
            <h2 className="section-title">Experiência</h2>
            <div className="experience-list">
                {experiences.map((exp, index) => (
                    <div key={index} className="experience-card">
                        <div className="experience-header">
                            <div className="title-group">
                                <h3 className="role">{exp.cargo}</h3>
                                <span className="company">{exp.empresa}</span>
                            </div>
                            <span className="duration">{exp.duracao}</span>
                        </div>

                        <div className="experience-content">
                            <ul className="tasks-list">
                                {exp.atividades.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                            <div className="tech-stack">
                                {exp.techs.map((tech, i) => (
                                    <span key={i} className="tech-badge">{tech}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experiences;