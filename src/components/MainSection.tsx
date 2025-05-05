import Button from "./Button";


const MainSection = () => {

    return(
        <main className="main-section">
        <Button text="Explora Nuestros Sabores →" />
        <div className="divider"></div>
        <Button text="Confactorios →" />
        <div className="divider"></div>
        <Button text="Regenerar" />
        <div className="divider"></div>
        <Button text="Nuevo" />
        <div className="divider"></div>
        <Button text="Añadir sección" />
      </main>
    );

};

export default MainSection;