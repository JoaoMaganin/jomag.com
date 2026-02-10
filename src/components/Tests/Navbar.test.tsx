import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Navbar from '../Navbar/Navbar';

describe('Navbar Component', () => {

    test('deve renderizar o nome do usuário e o ícone de verificado', () => {
        render(<Navbar />);

        // Verifica se o nome aparece na versão desktop/user menu
        const userName = screen.getByText(/JoaoMaganin/i);
        expect(userName).toBeInTheDocument();

        // Verifica se o avatar tem o alt text correto
        const avatar = screen.getByAltText(/Joao Maganin/i);
        expect(avatar).toBeInTheDocument();
    });

    test('deve conter os links para as redes sociais no desktop', () => {
        render(<Navbar />);

        // Encontra todos os links e filtra pelo href manualmente
        const linkedinLink = screen.getAllByRole('link').find(
            (link) => link.getAttribute('href') === 'https://www.linkedin.com/in/joaomontemor/'
        );
        const githubLink = screen.getAllByRole('link').find(
            (link) => link.getAttribute('href') === 'https://github.com/JoaoMaganin/'
        );

        expect(linkedinLink).toBeInTheDocument();
        expect(githubLink).toBeInTheDocument();
    });

    test('deve exibir o link do currículo corretamente', () => {
        render(<Navbar />);

        // Busca pelo texto exato do link
        const cvLinks = screen.getAllByText(/Currículo/i);
        // Verificação se existe no mobile e desktop
        expect(cvLinks.length).toBeGreaterThan(0);

        // Verifica se o primeiro link aponta para o PDF (usando a variável de ambiente mockada)
        expect(cvLinks[0].closest('a')).toHaveAttribute('href', expect.stringContaining('.pdf'));
    });

    test('deve abrir o menu mobile ao clicar no ícone de hambúrguer', () => {
        render(<Navbar />);

        // O IconButton do menu mobile tem um aria-label específico
        const menuButton = screen.getByLabelText(/account of current user/i);

        // Antes do clique, o menu (que é um elemento com role 'menu') pode estar oculto ou não renderizado
        fireEvent.click(menuButton);

        // Após o clique, verificamos se as opções do menu mobile aparecem
        const mobileLinkedin = screen.getByText(/Linkedin/i);
        const mobileGithub = screen.getByText(/Github/i);
        const mobileCurriculo = screen.getByText(/Currículo/i);

        expect(mobileLinkedin).toBeVisible();
        expect(mobileGithub).toBeVisible();
        expect(mobileCurriculo).toBeVisible();
    });
});