import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from '../Footer/Footer';

describe('Footer Component', () => {

    test('deve renderizar o logo específico na classe correta', () => {
    const { container } = render(<Footer />);
    
    const logo = container.querySelector('.footer-logo');
    expect(logo).toHaveTextContent(/João Vitor/i);
    expect(logo).toHaveTextContent(/Maganin/i);
  });

    test('deve exibir o ano atual dinamicamente', () => {
        render(<Footer />);
        const currentYear = new Date().getFullYear().toString();

        expect(screen.getByText(new RegExp(currentYear))).toBeInTheDocument();
    });

    test('deve conter os links sociais com os atributos corretos', () => {
        render(<Footer />);

        const githubLink = screen.getByLabelText(/GitHub/i);
        expect(githubLink).toHaveAttribute('href', 'https://github.com/JoaoMaganin');
        expect(githubLink).toHaveAttribute('target', '_blank');
        expect(githubLink).toHaveAttribute('rel', 'noreferrer');

        const linkedinLink = screen.getByLabelText(/LinkedIn/i);
        expect(linkedinLink).toHaveAttribute('href', 'https://linkedin.com/in/joaovm');

        const emailLink = screen.getByLabelText(/Email/i);
        expect(emailLink).toHaveAttribute('href', 'mailto:joaovitormontemor138@gmail.com');

        const whatsappLink = screen.getByLabelText(/WhatsApp/i);
        expect(whatsappLink).toHaveAttribute('href', 'https://wa.me/5524988193826');
    });
});