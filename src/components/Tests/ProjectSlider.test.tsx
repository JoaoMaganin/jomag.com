import { render, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProjectSlider from '../ProjectSlider/ProjectSlider';
import { PROJECT_IMAGES } from '../../constants/projectImages';
// Importação da constante real

describe('ProjectSlider Component', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  test('deve renderizar a primeira imagem da PROJECT_IMAGES corretamente', () => {
    // Passamos a constante real como prop para o componente refatorado
    render(<ProjectSlider images={PROJECT_IMAGES} />);
    
    // Validamos usando o dado real do arquivo de constantes
    const firstImage = screen.getByAltText(PROJECT_IMAGES[0].alt);
    expect(firstImage).toBeInTheDocument();
    expect(firstImage).toHaveAttribute('src', PROJECT_IMAGES[0].src);
  });

  test('deve exibir o título do projeto real na legenda', () => {
    render(<ProjectSlider images={PROJECT_IMAGES} />);
    
    // Verifica se o título "Maganin Automecânica" ou "SyncFlow" aparece conforme a constante
    expect(screen.getByText(PROJECT_IMAGES[0].title)).toBeInTheDocument();
  });
});