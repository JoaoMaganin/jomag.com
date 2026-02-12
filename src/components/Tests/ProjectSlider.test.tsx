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

    test('deve renderizar a imagem do projeto correto através do alt text', () => {
        render(<ProjectSlider images={PROJECT_IMAGES} />);

        // Em vez de getByText, usamos getByAltText
        // Isso valida tanto a presença quanto a acessibilidade do componente
        const projectImage = screen.getByAltText(PROJECT_IMAGES[0].alt);

        expect(projectImage).toBeInTheDocument();
        expect(projectImage).toHaveAttribute('src', PROJECT_IMAGES[0].src);
    });

    test('deve alternar para a segunda imagem (alt text) após o intervalo', () => {
        render(<ProjectSlider images={PROJECT_IMAGES} />);

        // Avança o tempo do setInterval (2500ms)
        act(() => {
            jest.advanceTimersByTime(2500);
        });

        // Verifica se a segunda imagem da sua constante agora está "disponível" no DOM
        // (Ou se o wrapper mudou de posição, como fizemos no teste anterior)
        const secondImage = screen.getByAltText(PROJECT_IMAGES[1].alt);
        expect(secondImage).toBeInTheDocument();
    });
});