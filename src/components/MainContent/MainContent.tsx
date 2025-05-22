import "./MainContent.css"
import logo from '../../assets/imagenes/l.png'

const MainContent = () => {
    return (
        <div className="main-container">

    
          {/* Contenido principal */}
          <div className="content">

            <div className="content-text">
              <h1>¡Bienvenidos a tu Heladería Axalotl Ice!</h1>
              <p className="subtitle">
                En <b>Axalotl Ice</b>, creamos helados y paletas artesanales con ingredientes frescos y naturales. 
                Cada bocado es una aventura llena de sabor y creatividad. ¡Ven y disfruta de lo mejor!
              </p>
              <button className="main-button">Explora nuestros sabores</button>
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