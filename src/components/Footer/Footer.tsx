import "./Footer.css";
import { FaFacebook, FaInstagram } from 'react-icons/fa';

const currentYear = new Date().getFullYear();

const Footer = () => {
  
    return (
    <footer className="footer">

      <div className="footer__icons">
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <FaInstagram className="text-2xl hover:scale-110 transition" />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <FaFacebook className="text-2xl hover:scale-110 transition" />
        </a>
      </div>

      <div className="footer__copyright">
        <p>© {currentYear} Heladería Axalotl Ice. ¡Todos los derechos reservados!</p>
        <p>Desarrollado por </p>
      </div>
    </footer>
  );
  
};

export default Footer;