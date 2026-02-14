import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Project } from '../../types';
import ProjectGallery from '../ProjectGallery/ProjectGallery';
import { PROJECTS } from '../../constants/projects';

// Mock de dados para o teste
const mockProjects: Project[] = PROJECTS;

describe('ProjectGallery Component', () => {
  
  test('deve exibir mensagem amigável quando a lista de projetos estiver vazia', () => {
    render(<ProjectGallery projects={[]} />);
    expect(screen.getByText(/Nenhum projeto encontrado/i)).toBeInTheDocument();
  });

  test('deve renderizar os títulos de todos os projetos passados via props', () => {
    render(<ProjectGallery projects={mockProjects} />);
    
    expect(screen.getByText('Maganin Automecânica')).toBeInTheDocument();
    expect(screen.getByText('SyncFlow')).toBeInTheDocument();
  });

  test('deve abrir o modal com detalhes ao clicar em um projeto', () => {
    render(<ProjectGallery projects={mockProjects} />);
    
    // Simula o clique no primeiro item do grid
    const firstProjectItem = screen.getByTestId('project-item-1');
    fireEvent.click(firstProjectItem);

    // Verifica se os elementos do modal apareceram
    expect(screen.getByText(mockProjects[0].longDescription)).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: mockProjects[0].title, level: 2 })).toBeInTheDocument();
    
    // Verifica se as tech-tags estão presentes
    mockProjects[0].techs.forEach(tech => {
      expect(screen.getByText(tech)).toBeInTheDocument();
    });
  });

  test('deve fechar o modal ao clicar no botão de fechar (X)', () => {
    render(<ProjectGallery projects={mockProjects} />);
    
    // Abre o modal
    fireEvent.click(screen.getByTestId('project-item-1'));
    
    // Busca o botão pelo aria-label que adicionamos
    const closeBtn = screen.getByLabelText(/Fechar modal/i);
    fireEvent.click(closeBtn);

    // Verifica se o modal sumiu do DOM
    expect(screen.queryByTestId('modal-overlay')).not.toBeInTheDocument();
  });

  test('deve fechar o modal ao clicar no overlay de fundo', () => {
    render(<ProjectGallery projects={mockProjects} />);
    
    // Abre o modal
    fireEvent.click(screen.getByTestId('project-item-1'));

    // Clica no overlay (fora do conteúdo do modal)
    const overlay = screen.getByTestId('modal-overlay');
    fireEvent.click(overlay);

    expect(screen.queryByTestId('modal-overlay')).not.toBeInTheDocument();
  });

  test('não deve fechar o modal ao clicar dentro do conteúdo (stopPropagation)', () => {
    render(<ProjectGallery projects={mockProjects} />);
    
    // Abre o modal
    fireEvent.click(screen.getByTestId('project-item-1'));

    // Clica na descrição dentro do modal
    const description = screen.getByText(mockProjects[0].longDescription);
    fireEvent.click(description);

    // O modal deve continuar aberto
    expect(screen.getByTestId('modal-overlay')).toBeInTheDocument();
  });
});