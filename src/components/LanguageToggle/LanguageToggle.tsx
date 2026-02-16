import { useTranslation } from 'react-i18next';
import './LanguageToggle.css';

const LanguageToggle = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'pt' ? 'en' : 'pt';
    i18n.changeLanguage(newLang);
  };

  const isEnglish = i18n.language === 'en';

  return (
    <div className="language-toggle-container">
      <span className={`lang-label ${!isEnglish ? 'active' : ''}`}>PT</span>
      <div 
        className={`toggle-switch ${isEnglish ? 'en' : 'pt'}`} 
        onClick={toggleLanguage}
        role="button"
        aria-label="Alternar Idioma"
      >
        <div className="toggle-knob"></div>
      </div>
      <span className={`lang-label ${isEnglish ? 'active' : ''}`}>EN</span>
    </div>
  );
};

export default LanguageToggle;