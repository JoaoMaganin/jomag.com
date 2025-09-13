import React, { useState, useEffect } from 'react';
import './WordRotator.css';


const WordRotator = ({ period = 3000 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFading, setIsFading] = useState(false);

    const SKILLS_LIST = [
        "Python",
        "Java",
        "TypeScript",
        "Springboot",
        "ReactJS",
        "Angular",
        "Django",
        "MySQL",
        "SQLServer"
    ];
    useEffect(() => {
        const interval = setInterval(() => {
            setIsFading(true);

            setTimeout(() => {
                setCurrentIndex(prevIndex => (prevIndex + 1) % SKILLS_LIST.length);
                setIsFading(false);
            }, 500);
        }, period);

        return () => clearInterval(interval);
    }, [period]);

    if (!SKILLS_LIST || SKILLS_LIST.length === 0) {
        return null;
    }

    return (
        <div className='mainWord'>
            <span>Sou um dev</span>
            <span className={`wordRotator ${isFading ? 'fading' : ''}`}>
                {SKILLS_LIST[currentIndex]}
            </span>
        </div>
    );
};

export default WordRotator;