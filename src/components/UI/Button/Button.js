import styles from "./button.module.css";

// Reuseable button component
// has 2 css style: light and dark
// allows to disable css hover
function Button({children, type, onClick, className, disabled, white, disableHover, ...props}){

    return(
        <button 
        type={type}
        onClick={onClick}
        className={`
            ${styles.button} 
            ${className} 
            ${disabled && styles.disabled} 
            ${white && styles.white} 
            ${ disableHover || white ? "hoverLight" : "hoverDark"}`}
        disabled={disabled}
        {...props}
        >{children}</button>

    )
}

export default Button;