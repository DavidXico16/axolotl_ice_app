import "./MainContent.css"
import logo from '../../assets/imagenes/l.png'
import { FaFacebook, FaInstagram } from 'react-icons/fa';

const MainContent = () => {
    return (
        <div className="main-container">

    
          {/* Contenido principal */}
          <div className="content">

            <div className="content-text">
              <h1>¡Bienvenidos a tu Heladería Axalotl Ice!</h1>
              <p className="subtitle">
                Descubre una explosión de sabores y la calidad que nos
                distingue. ¡Tu experiencia deliciosa comienza aquí!
              </p>
              <button className="main-button">Explora nuestros sabores</button>
      
              {/* Redes sociales */}
              <div className="social-icons">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="text-2xl hover:scale-110 transition" />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <FaFacebook className="text-2xl hover:scale-110 transition" />
                </a>
              </div>
            </div>
            

            {/* Imagen vertical flotante */}
            <div className="content-img">
              <div className="image-container">
                <img src={logo} alt="Heladería local" />
              </div>
            </div>


          </div>
        </div>
      );
};

export default MainContent;