import styles from "./button.module.css";

function Button({children, type, onClick, className, ...props}){

    return(
        <button 
        type={type}
        onClick={onClick}
        className={`${styles.button} ${className}`}
        {...props}
        >{children}</button>

    )
}

export default Button;