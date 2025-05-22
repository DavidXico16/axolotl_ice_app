import "./Navbar.css"
import icon from '../../assets/imagenes/icon_axolotl.jpg'
import { useState } from "react";
import { FaAlignJustify, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import menuPdf from '../../assets/menu/menu_axolotl.pdf'


const Navbar = () => {
  
  const [isOpen, setIsOpen] = useState(true);
  const toggleMenu = () => setIsOpen(prev => !prev);

  const handleDownload = () => {
    const pdfUrl = menuPdf;
    const fileName = "Menu-Axalotl-Ice.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };


  const phoneNumber = '525521320331'; // Reemplaza con tu número (incluye código país)
  const defaultMessage = 'Hola, vi tu heladería Axalotl Ice y me interesa saber más...';
  const handleClickWhatApp = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;
    window.open(url, '_blank');
  };
  

  return (
      <div className="navbar">
        <div className="navbar__icon">
          <img src={icon} className="icon_navbar" alt="Axolotl decorativo"/>
        </div>
  
        <div className="navbar__links">

          <Link to="/" style={{ marginRight: '1rem' }}>
            <button className="select_menu" autoFocus >
                Inicio
            </button>
          </Link>

          <Link to="/quienesSomos" style={{ marginRight: '1rem' }}>
            <button className="select_menu" >
                Quienes Somos
            </button>
          </Link>

          <Link to="/conocenos" style={{ marginRight: '1rem' }}>
            <button className="select_menu" >
                Conócenos
            </button>
          </Link>
          
          <button className="select_menu" onClick={handleDownload} >
                  Menu
          </button>
      

        </div>
  
        <div className="navbar__button">
          <button onClick={handleClickWhatApp}>
          Contacto <FaWhatsapp className="text-2xl hover:scale-110 transition"  />
          </button>
        </div>

        <div className="menu_button">
          <button onClick={toggleMenu} className="custom-button">
            <FaAlignJustify className="text-2xl hover:scale-110 transition"  />
          </button>
          {isOpen && (
            <div className="menu">
              <ul className="fullscreen-menu" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li>
                  <Link onClick={toggleMenu} to="/" >Inicio</Link> 
                </li>
                <li>
                  <Link onClick={toggleMenu}  to="/quienesSomos" >Quienes Somos</Link> 
                </li>
                <li>
                  <Link onClick={toggleMenu} to="/conocenos" >Conócenos</Link> 
                </li>
                <li>
                  <a onClick={toggleMenu} >
                    Menu
                  </a>
                </li>
                <li>
                  <a onClick={handleClickWhatApp} >
                    Contacto
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    );
  };

  export default Navbar;