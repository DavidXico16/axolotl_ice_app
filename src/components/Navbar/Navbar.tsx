import "./Navbar.css"
import icon from '../../assets/imagenes/icon_axolotl.jpg'
import { useState } from "react";
import { FaAlignJustify } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import menuPdf from '../../assets/menu/menu_axolotl.pdf'


const Navbar = () => {
  
  const [isOpen, setIsOpen] = useState(true);
  const toggleMenu = () => setIsOpen(prev => !prev);

  const handleDownload = () => {
    // Ruta relativa al archivo PDF en la carpeta 'public'
    const pdfUrl = menuPdf;
    // Nombre que tendrá el archivo al descargarse
    const fileName = "Menu-Axalotl-Ice.pdf";
    
    // Crear un enlace temporal para la descarga
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
      <div className="navbar">
        <div className="navbar__icon">
          <img src={icon} className="icon_navbar" 
          alt="Helado decorativo"  />
        </div>
  
        
        <div className="navbar__links">

          <Link to="/" style={{ marginRight: '1rem' }}>
            <button className="select_menu" >
                Inicio
            </button>
          </Link>

          <Link to="/quienesSomos" style={{ marginRight: '1rem' }}>
            <button className="select_menu" >
                Quieren Somos
            </button>
          </Link>
          <Link to="/conocenos" style={{ marginRight: '1rem' }}>
            <button className="select_menu" >
                Conócenos
            </button>
          </Link>
          <a href="#">
            <button className="select_menu" onClick={handleDownload} >
                    Menu
            </button>
          </a>

        </div>
  
        <div className="navbar__button">
          <button>Contacto</button>
        </div>

        <div className="menu_button">
          <button onClick={toggleMenu} className="custom-button">
            <FaAlignJustify className="text-2xl hover:scale-110 transition"  />
          </button>
          {isOpen && (
            <div className="menu">
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li><a href="#">Opción 1</a></li>
                <li><a href="#">Opción 2</a></li>
                <li><a href="#">Opción 3</a></li>
              </ul>
            </div>
          )}
        </div>
      </div>
    );
  };

  export default Navbar;