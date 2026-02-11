import { render, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import WordRotator from '../WordRotator/WordRotator';
import { SKILLS_LIST } from '../../constants/skills';

describe('WordRotator Component', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  test('deve renderizar a primeira skill passada via props', () => {
    render(<WordRotator skills={SKILLS_LIST} />);
    
    // Agora o teste é 100% dinâmico baseado no mock
    expect(screen.getByText(SKILLS_LIST[0])).toBeInTheDocument();
  });

  test('deve alternar as palavras do mock corretamente', () => {
    render(<WordRotator skills={SKILLS_LIST} period={1000} />);

    // Avança o tempo
    act(() => {
      jest.advanceTimersByTime(1000); // Period
      jest.advanceTimersByTime(500);  // Fade timeout
    });

    expect(screen.getByText(SKILLS_LIST[1])).toBeInTheDocument();
  });
});