import { motion } from 'framer-motion';

const Button = ({ children, variant = 'primary', className = '', onClick, type = 'button' }) => {
  const baseStyle = "px-6 py-3 rounded-full font-bold transition-colors shadow-lg";
  
  const variants = {
    primary: "bg-primary-500 text-white shadow-primary-500/30 hover:bg-primary-600",
    secondary: "bg-secondary-100 text-primary-700 shadow-secondary-200/50 hover:bg-secondary-200",
    outline: "bg-transparent border-2 border-primary-500 text-primary-600 shadow-none hover:bg-primary-50",
  };

  return (
    <motion.button
      type={type}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`${baseStyle} ${variants[variant]} ${className}`}
    >
      {children}
    </motion.button>
  );
};

export default Button;
