import { render, screen, fireEvent, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import Skills from '../Skills/Skills';

describe('Skills Component', () => {
  
  const setWidth = (width: number) => {
    global.innerWidth = width;
    global.dispatchEvent(new Event('resize'));
  };

  beforeEach(() => {
    setWidth(1024);
  });

  test('deve renderizar o título principal e as categorias', () => {
    render(<Skills />);
    
    expect(screen.getByText(/Habilidades Técnicas/i)).toBeInTheDocument();
    expect(screen.getByText(/Backend/i)).toBeInTheDocument();
    expect(screen.getByText(/Frontend/i)).toBeInTheDocument();
  });

  test('deve mostrar todas as skills por padrão no Desktop', () => {
    render(<Skills />);
    
    expect(screen.getByText(/Java \(Spring Boot\)/i)).toBeVisible();
    expect(screen.getByText(/ReactJS \/ Next.js/i)).toBeVisible();
    expect(screen.getByText(/Docker/i)).toBeVisible();
  });

  test('deve iniciar com categorias colapsadas no Mobile', () => {
    setWidth(500);
    render(<Skills />);
    
    const skillLists = document.querySelectorAll('.skills-collapse');
    
    skillLists.forEach(list => {
      expect(list).toHaveClass('collapsed');
    });
  });

  test('deve expandir uma categoria ao clicar no Mobile', () => {
    setWidth(500);
    render(<Skills />);
    
    const backendHeader = screen.getByText(/Backend/i);
    const backendCollapse = backendHeader.closest('.skill-category')?.querySelector('.skills-collapse');

    expect(backendCollapse).toHaveClass('collapsed');

    fireEvent.click(backendHeader);
    expect(backendCollapse).toHaveClass('expanded');
    
    fireEvent.click(backendHeader);
    expect(backendCollapse).toHaveClass('collapsed');
  });

  test('não deve fechar categorias ao clicar no Desktop', () => {
    setWidth(1024);
    render(<Skills />);
    
    const frontendHeader = screen.getByText(/Frontend/i);
    const frontendCollapse = frontendHeader.closest('.skill-category')?.querySelector('.skills-collapse');

    expect(frontendCollapse).toHaveClass('expanded');

    fireEvent.click(frontendHeader);

    expect(frontendCollapse).toHaveClass('expanded');
  });
});