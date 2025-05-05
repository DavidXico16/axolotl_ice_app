import "./Navbar.css"
import icon from '../../assets/imagenes/icon_axolotl.jpg'


const Navbar = () => {
    return (
        <div className="navbar">
          <div className="navbar__icon">
            <img src={icon} className="icon_navbar" 
            alt="Helado decorativo"  />
          </div>
    
          <div className="navbar__links">
            <a href="#">Inicio</a>
            <a href="#">Sabores</a>
            <a href="#">Productos</a>
          </div>
    
          <div className="navbar__button">
            <button>Conócenos</button>
          </div>
        </div>
      );
  };

  export default Navbar;