import { ProjectImage } from "../types";

export const PROJECT_IMAGES: ProjectImage[] = [
    { 
        src: `${process.env.PUBLIC_URL}/assets/images/project1.png`, 
        alt: 'Interface do sistema de gestão Maganin Automecânica',  
        title: "Maganin Automecânica"
    },
    { 
        src: `${process.env.PUBLIC_URL}/assets/gifs/syncflow.gif`, 
        alt: 'Demonstração do sistema de microsserviços SyncFlow',
        title: 'SyncFlow'
    },
    { 
        src: `${process.env.PUBLIC_URL}/assets/images/project2.jpg`, 
        alt: 'Employee Management',
        title: 'Employee Management'
    },
    { 
        src: `${process.env.PUBLIC_URL}/assets/images/itau.png`, 
        alt: 'API REST focada no processamento e análise de transações financeiras.',
        title: 'Itau Tech Challenge'
    },
];