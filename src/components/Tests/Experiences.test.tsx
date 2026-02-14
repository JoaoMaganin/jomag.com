import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Experiences from '../Experiences/Experiences';

describe('Experiences Component', () => {
  
  test('deve renderizar o título da seção e as empresas', () => {
    render(<Experiences />);
    
    expect(screen.getByText(/Experiência/i)).toBeInTheDocument();
    expect(screen.getByText(/DE PAULO PÃES/i)).toBeInTheDocument();
    expect(screen.getByText(/BNDES/i)).toBeInTheDocument();
  });

  test('deve alternar a visibilidade do conteúdo ao clicar no cabeçalho', () => {
    global.innerWidth = 500;
    render(<Experiences />);

    const experienceHeader = screen.getByText(/DE PAULO PÃES/i);
    const cardContainer = experienceHeader.closest('.experience-card');

    expect(cardContainer).not.toHaveClass('is-open');

    fireEvent.click(experienceHeader);
    expect(cardContainer).toHaveClass('is-open');

    fireEvent.click(experienceHeader);
    expect(cardContainer).not.toHaveClass('is-open');
  });

  test('deve iniciar com todos os cards abertos em telas desktop', () => {
    global.innerWidth = 1024;
    render(<Experiences />);

    const cards = document.querySelectorAll('.experience-card');
    cards.forEach(card => {
      expect(card).toHaveClass('is-open');
    });
  });

  test('deve exibir as tecnologias (badges) corretamente', () => {
    const { container } = render(<Experiences />);
    
    const javaEETechs = screen.getAllByText(/JavaEE/i);
    expect(javaEETechs.length).toBeGreaterThan(0);

    const techBadge = container.querySelector('.tech-badge');
    expect(techBadge).toHaveTextContent(/Microsoft Business/i); 
    
    expect(screen.getAllByText(/Sharepoint/i)[0]).toBeInTheDocument();
  })
});