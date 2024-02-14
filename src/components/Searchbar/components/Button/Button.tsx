type ButtonProps = {
  onClick: () => void;
}

const Button = ({ onClick }: ButtonProps) => {
  return (
    <button onClick={onClick} className='bg-blue-100 rounded-md	w-20	'>Button</button>
  );
}

export default Button;