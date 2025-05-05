interface ButtonProps {
    text: string;
  }
  
  const Button = ({ text }: ButtonProps) => {
    return (
      <button className="custom-button">
        {text}
      </button>
    );
  };
  
  export default Button;