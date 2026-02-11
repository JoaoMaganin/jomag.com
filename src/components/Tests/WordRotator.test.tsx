import { render, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import WordRotator from '../WordRotator/WordRotator';

describe('WordRotator Component', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  const mockSkills = ["React", "TypeScript", "Node"];

  test('deve renderizar a primeira skill passada via props', () => {
    render(<WordRotator skills={mockSkills} />);
    
    // Agora o teste é 100% dinâmico baseado no mock
    expect(screen.getByText(mockSkills[0])).toBeInTheDocument();
  });

  test('deve alternar as palavras do mock corretamente', () => {
    render(<WordRotator skills={mockSkills} period={1000} />);

    // Avança o tempo
    act(() => {
      jest.advanceTimersByTime(1000); // Period
      jest.advanceTimersByTime(500);  // Fade timeout
    });

    expect(screen.getByText(mockSkills[1])).toBeInTheDocument();
  });
});