const Button = ({ children, onClick, type = "button", disabled = false, className = "", ...props }) => {
  return (
    <button type={type} onClick={onClick} disabled={disabled} className={className} {...props}>
      {children}
    </button>
  )
}

export default Button