import React, { useState, useEffect } from 'react';
import './WordRotator.css';
import { SKILLS_LIST } from '../../constants/skills';
import { WordRotatorProps } from '../../types';

const WordRotator: React.FC<WordRotatorProps> = ({ skills = [], period = 3000 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFading, setIsFading] = useState(false);

    useEffect(() => {
        // Se a lista estiver vazia, não inicia o intervalo
        if (skills.length === 0) return;

        const interval = setInterval(() => {
            setIsFading(true);

            setTimeout(() => {
                setCurrentIndex(prevIndex => (prevIndex + 1) % skills.length);
                setIsFading(false);
            }, 500);
        }, period);

        return () => clearInterval(interval);
    }, [period, skills.length]);

    if (!SKILLS_LIST || SKILLS_LIST.length === 0) {
        return null;
    }

    return (
        <div className='mainWord'>
            <span>Desenvolvedor</span>
            <span className={`wordRotator ${isFading ? 'fading' : ''}`}>
                {SKILLS_LIST[currentIndex]}
            </span>
        </div>
    );
};

export default WordRotator;