
import './button.css'

const Button =({className,onClick,children,})=>{
return(
    <button 
     className={`but ${className}`} onClick={onClick} >{children}</button>
)
}
export default Button